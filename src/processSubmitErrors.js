import { SubmissionError } from 'redux-form'

const processSubmitErrors = response => {
    let errors = {}
    if (response.hasOwnProperty('errors')) {
        for (let field in response.errors.children) {
            let value = response.errors.children[field]
            if (value.hasOwnProperty('errors'))  {
                errors[field] = value.errors[0]
            }
        }
        throw new SubmissionError(errors)

    }
    return {}
}

export default processSubmitErrors
