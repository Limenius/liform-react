import React from 'react'
import PropTypes from 'prop-types'
import renderField from '../../renderField'
import { FieldArray } from 'redux-form'
import _ from 'lodash'
import ChoiceWidget from './ChoiceWidget'

const renderArrayFields = (count, schema, theme, fieldName, remove, context) => {
    const prefix = fieldName + '.'
    if (count) {
        return _.times(count, (idx) => {
            return (
            <div key={idx}>
                <button className="pull-right btn btn-danger" onClick={(e) => {
                    e.preventDefault()
                    remove(idx)
                }}><span className="glyphicon glyphicon-trash"></span></button>
                {renderField({ ...schema, showLabel : false }, idx.toString(), theme, prefix, context)}
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
            { renderArrayFields(field.fields.length, field.schema.items, field.theme, field.fieldName, (idx) => field.fields.remove(idx), field.context) }
            <button type="button" className="pull-right btn btn-primary" onClick={() => field.fields.push({})}>Add</button>
            <div className="clearfix"/>
        </div>
    )
}

const CollectionWidget = props =>  {
    return (
        <FieldArray
            component={renderInput}
            label={props.label}
            name={props.fieldName}
            fieldName={props.fieldName}
            schema={props.schema}
            values={props.values}
            theme={props.theme}
            context={props.context}
        />
    )
}

const ArrayWidget = props =>  {
    // Arrays are tricky because they can be multiselects or collections
    if (props.schema.items.hasOwnProperty('enum') && props.schema.hasOwnProperty('uniqueItems') && props.schema.uniqueItems) {
        return ChoiceWidget({ ...props, schema: props.schema.items, multiple: true })
    } else {
        return CollectionWidget(props)
    }
}

ArrayWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.object,
    context: PropTypes.object,
}

export default ArrayWidget
