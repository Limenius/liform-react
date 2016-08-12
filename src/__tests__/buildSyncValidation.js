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
});
