import { SubmissionError } from 'redux-form'
import _ from 'lodash' // added for empty check

const convertToReduxFormErrors = (obj) => { 
                    
    let objectWithoutChildrenAndFalseErrors = {}
    Object.keys(obj).map( (name) => {
            if(name === 'children'){
                objectWithoutChildrenAndFalseErrors = { ...objectWithoutChildrenAndFalseErrors, ...convertToReduxFormErrors(obj[name])}
            }else{
                if( obj[name].hasOwnProperty('children')){ // if children, take field from it and set them directly as own field
                    objectWithoutChildrenAndFalseErrors[name] = convertToReduxFormErrors(obj[name])  
                }else{
                    if( obj[name].hasOwnProperty('errors') && !_.isEmpty(obj[name]['errors']) ){  // using lodash for empty error check, dont add them if empty
                       objectWithoutChildrenAndFalseErrors[name] = obj[name]['errors']
                    } 
                } 
            }
        }  
    )
    return objectWithoutChildrenAndFalseErrors
}

const processSubmitErrors = (errors) => {
    if(errors.hasOwnProperty('errors')){
        errors = convertToReduxFormErrors(errors.errors)
        throw new SubmissionError(errors)  
    }
    return {} // dont know why original processSubmitErrors return empty object, keep this to prevent any BC break
}

export default processSubmitErrors
