import Ajv from 'ajv'


const setError = (errors, error) => {
    const dataPathParts = error.dataPath.split('.').slice(1)
    //  regular expression to  get the object path and index from the ajv error data path
    const re = /(^\w+)\[([0-9]+)\]/gm

    dataPathParts.reduce((errors, part, index) => {
        let res = re.exec(part)
        
        if(res && res.length>0) {
            let p = res[1]
            let i = res[2]
            if(!errors[p]) {
                errors[p] = []
            }
            if(typeof errors[p]=='string') {
                let err = errors[p]
                errors[p] = []
                errors[p]._error = err
            }
            if (index === dataPathParts.length -1) {
                errors[p][i] = error.message
            }else{
                errors[p][i] = errors[p][i] || {}
            }
            return errors[p][i]
        }
        if (index === dataPathParts.length -1) {
            errors[part] = error.message
        }
        if (!errors[part]) {
            errors[part] = {}
        }
        return errors[part]
    }, errors)
    return errors
}


const buildSyncValidation = (schema, 
    ajv = new Ajv({ errorDataPath: 'property', allErrors: true }) ) => {
    return values => {
        let errors = {}
        const valid = ajv.validate(schema, values)
        if (valid) {
            return {}
        }
        const ajvErrors = ajv.errors

        ajvErrors.forEach((error) => {
            setError(errors, error)
        })
        return errors
    }

}

export default buildSyncValidation

export { setError }
