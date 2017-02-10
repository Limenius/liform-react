import Ajv from 'ajv'


const setError = (errors, error) => {
    const dataPathParts = error.dataPath.split('.').slice(1)

    dataPathParts.reduce((errors, part, index) => {
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


const buildSyncValidation = schema => {
    const ajv = new Ajv({ errorDataPath: 'property', allErrors: true })
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
