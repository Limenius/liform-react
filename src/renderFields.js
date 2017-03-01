import _ from 'lodash'
import renderField from './renderField'

const renderFields =
    (schema, theme, prefix = null, context = {}) =>
    {
        return _.map(schema.properties, (field, name) =>  renderField(field, name, theme, prefix, context))
    }

export default renderFields
