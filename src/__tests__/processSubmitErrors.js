import expect from 'expect'
import processSubmitErrors from '../processSubmitErrors'
import { SubmissionError } from 'redux-form'

describe('processSubmitErrors', () => {


    it('raises exception if there is an error', () => {
        const response = {
            'code' : null,
            'message' : 'Validation Failed',
            'errors':
            {
                'children':
                {
                    'name': {
                        'errors': [ 'This value should not be equal to \'Mary\'.' ]
                    },
                    'color' : []
                }
            }
        }
        expect(function () {
            processSubmitErrors(response)
        }).toThrow(SubmissionError)
    })

    it('does not raise exception if there is no error', () => {
        const response = {
            'code' : null,
            'message' : 'Validation Failed'
        }
        expect(function () {
            processSubmitErrors(response)
        }).toNotThrow(SubmissionError)
    })
})
