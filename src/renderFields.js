import _ from 'lodash'
import renderField from './renderField'

const renderFields =
    (schema, theme, prefix = null) =>
    {
        return _.map(schema.properties, (field, name) =>  renderField(field, name, theme, prefix))
    }

export default renderFields
