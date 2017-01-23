import React from 'react'
import renderField from '../../renderField'
import { FieldArray } from 'redux-form'
import _ from 'lodash'

const renderArrayFields = (count, schema, theme, fieldName, remove) => {
    const prefix = fieldName + '.'
    if (count) {
        return _.times(count, (idx) => {
            return (
            <div key={idx}>
                {renderField({ ...schema, title: idx }, idx.toString(), theme, prefix)}
                <button className="btn btn-danger" onClick={(e) => {
                    e.preventDefault()
                    remove(idx)
                }}>Remove</button>
            </div>
            )
        })
    } else {
        return null
    }
}

const renderInput = field => {
    return (
        <div className="arrayType form-group">
            <legend className="control-label" >{field.label}</legend>
            { renderArrayFields(field.fields.length, field.schema.items, field.theme, field.name, (idx) => field.fields.remove(idx)) }
            <button type="button" className="btn btn-primary" onClick={() => field.fields.push({})}>Add Member</button>
        </div>
    )
}

const ArrayWidget = props =>  {
    return (
        <FieldArray
            component={renderInput}
            label={props.label}
            name={props.fieldName}
            schema={props.schema}
            theme={props.theme}
        />
    )
}

ArrayWidget.propTypes = { schema: React.PropTypes.object.isRequired }

export default ArrayWidget
