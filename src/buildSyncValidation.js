import Ajv from 'ajv'
import merge from 'deepmerge'
import _ from 'lodash'

const setError = (error, schema) => {
    const dataPathParts = error.dataPath.split('/').slice(1)
    let dataPath = error.dataPath.slice(1).replace(/\//g,'.')

    const type = findTypeInSchema(schema, dataPathParts)

    let errorToSet
    if (type === 'array') {
        errorToSet = { _error: error.message }
    } else {
        errorToSet = error.message
    }

    let errors = {}
    _.set(errors, dataPath, errorToSet)
    return errors

}

const findTypeInSchema = (schema, dataPath) => {
    if (dataPath.length == 0) {
        return schema.type
    } else {
        if (schema.type === 'array') {
            return findTypeInSchema(schema.items, dataPath.slice(1))
        } else {
            return findTypeInSchema(schema.properties[dataPath[0]], dataPath.slice(1))
        }
    }
}

const buildSyncValidation = (schema, ajvParam = null ) => {
    let ajv = ajvParam
    if (ajv === null) {
        ajv = new Ajv({ errorDataPath: 'property', allErrors: true, jsonPointers: true })
    }
    return values => {
        const valid = ajv.validate(schema, values)
        if (valid) {
            return {}
        }
        const ajvErrors = ajv.errors

        let errors = ajvErrors.map((error) => {
            return setError(error, schema)
        })
        // We need at least two elements
        errors.push({})
        errors.push({})
        return merge.all(errors)
    }

}

export default buildSyncValidation

export { setError }
