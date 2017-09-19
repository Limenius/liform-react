import expect from 'expect'
import { setError } from '../buildSyncValidation.js'

describe('setError', () => {

    it('Converts between ajv format and object', () => {
        const errors = setError({}, { dataPath: '.one.two', message: 'I\'m an error' })
        expect(errors).toBeA('object').toIncludeKey('one')

    })
})
