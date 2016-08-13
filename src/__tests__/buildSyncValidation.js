import expect, {createSpy} from 'expect';
import buildSyncValidation from '../buildSyncValidation';


describe('buildSyncValidation', () => {
    const schema = {
        title: 'A schema',
        properties: {
            name : {
                type: 'string',
                title: 'A name',
                pattern: 'a{3}',
            }
        }
    };

    it('returns error if pattern does not match', () => {
        var errors = buildSyncValidation(schema)({name: 'hola'});
        expect(errors).toIncludeKey('name');
        var errors2 = buildSyncValidation(schema)({name: 'holaaa'});
        expect(errors2).toExcludeKey('name');
    });

    const schemaLength = {
        title: 'A schema',
        properties: {
            name : {
                type: 'string',
                title: 'A name',
                maxLength: 3,
            }
        }
    };

    it('returns error if too much length', () => {
        var errors = buildSyncValidation(schemaLength)({name: '123456'});
        expect(errors).toIncludeKey('name');
        var errors2 = buildSyncValidation(schemaLength)({name: 'ho'});
        expect(errors2).toExcludeKey('name');
    });

    const schemaLengthMin = {
        title: 'A schema',
        properties: {
            name : {
                type: 'string',
                title: 'A name',
                minLength: 3,
            }
        }
    };

    it('returns error if length is too short', () => {
        var errors = buildSyncValidation(schemaLengthMin)({name: '123456'});
        expect(errors).toExcludeKey('name');
        var errors2 = buildSyncValidation(schemaLengthMin)({name: 'ho'});
        expect(errors2).toIncludeKey('name');
    });

    const schemaMultipleOf = {
        title: 'A schema',
        properties: {
            quantity : {
                type: 'integer',
                multipleOf: 3,
            }
        }
    };

    it('returns error if fails multipleOf', () => {
        var errors = buildSyncValidation(schemaMultipleOf)({quantity: '6'});
        expect(errors).toExcludeKey('quantity');
        var errors2 = buildSyncValidation(schemaMultipleOf)({quantity: '16'});
        expect(errors2).toIncludeKey('quantity');
    });
});
