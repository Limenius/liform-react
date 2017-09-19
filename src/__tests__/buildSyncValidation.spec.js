import expect from 'expect'
import buildSyncValidation, { setError } from '../buildSyncValidation.js'
import Ajv from 'ajv'

describe('sync validation', () => {

    it('Works with basic objects', () => {
        let schema = {
            properties: {
                name : {
                    type: 'string',
                    minLength: 3,
                },
            },
            required:["name"]
        }

        let values = {}
        let errors = buildSyncValidation(schema)(values)
        expect(errors).toBeA('object').toIncludeKey('name')
    })
    it('Errors on arrays are in _error key of the array', () => {
        let schema = {
            properties: {
                columns: {
                    type: "array",
                    minItems: 1,
                    items: {
                        type: "string"
                    }
                },
            },
            required:["columns"]
        }

        let values = {}
        let errors = buildSyncValidation(schema)(values)
        expect(errors).toBeA('object').toIncludeKey('columns')
        expect(errors.columns).toBeA('object').toIncludeKey('_error')
    })
    it('Works with array elements', () => {
        let schema = {
            properties: {
                columns: {
                    type: "array",
                    minItems: 1,
                    items: {
                        type: "string",
                        minLength: 3
                    }
                },
            },
            required:["columns"]
        }

        let values = {columns: ['a']}
        let errors = buildSyncValidation(schema)(values)
        expect(errors).toBeA('object').toIncludeKey('columns')
        expect(errors.columns).toBeA('object').toIncludeKey('0')
    })
    it('Works with several errors', () => {
        let schema = {
            properties: {
                name: {
                    type: "string",
                    minLength: 3,
                },
                columns: {
                    type: "array",
                    minItems: 1,
                    items: {
                        type: "string",
                        minLength: 3
                    }
                },
            },
            required:["columns", "name"]
        }

        let values = {columns: ['a'], name: 'aa'}
        let errors = buildSyncValidation(schema)(values)
        expect(errors).toBeA('object').toIncludeKey('columns')
        expect(errors).toBeA('object').toIncludeKey('name')
        expect(errors.columns).toBeA('object').toIncludeKey('0')
    })
})

