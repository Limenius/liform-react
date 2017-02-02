import _ from 'lodash'
import renderField from './renderField'

export const isRequired = (schema, fieldName) => {
    if (!schema.required) {
        return false
    }
    return (schema.required.indexOf(fieldName) != 1)
}

const renderFields =
    (schema, theme, prefix = null) =>
    {
        let propertyNames = Object.keys(schema.properties)
        propertyNames.sort((a, b) => {
            if (!a.properyOrder) {
                return 1
            }
            if (!b.properyOrder) {
                return -1
            }
            return a.propertyOrder - b.propertyOrder
        })
        return _.map(propertyNames, (name) => {
            return renderField(schema.properties[name], name, theme, prefix, isRequired(schema, name))
        })
    }

export default renderFields
