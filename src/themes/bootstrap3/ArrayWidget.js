import React from 'react'
import renderField from '../../renderField'
import { FieldArray } from 'redux-form'
import _ from 'lodash'

const renderArrayFields = (count, schema, theme, fieldName, remove) => {
    const prefix = fieldName + '.'
    if (count) {
        return _.times(count, (idx) => {
            console.log(idx)
            return (
            <div key={idx}>
                <button className="pull-right btn btn-danger" onClick={(e) => {
                    e.preventDefault()
                    remove(idx)
                }}><span className="glyphicon glyphicon-trash"></span></button>
                {renderField({ ...schema, title: '' }, idx.toString(), theme, prefix)}
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
            <button type="button" className="pull-right btn btn-primary" onClick={() => field.fields.push({})}>Add</button>
            <div className="clearfix"/>
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
