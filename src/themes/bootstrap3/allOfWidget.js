import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Field } from 'redux-form'
import renderField from '../../renderField'
import deepmerge from 'deepmerge'

const renderInput = field => {
    const className = classNames([
        'form-group',
        { 'has-error' : field.meta.touched && field.meta.error }
    ])
    const schema = mergeSchema(field.schema)
    
    return (
        <div className={className}>
            {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
            {field.description && <span className="help-block">{field.description}</span>}
            {renderField({ ...schema, showLabel : false }, field.fieldName, field.theme, field.fieldName+'.', field.context)}
        </div>
    )
}

const mergeSchema = schema => {
    let newSchema = deepmerge.all(schema.allOf)
    newSchema = { ...schema, ...newSchema }
    delete newSchema.allOf
    return newSchema
}

const allOfWidget = props =>  {
    return (
        <Field
            component={renderInput}
            label={props.label}
            name={props.fieldName}
            fieldName={props.fieldName}
            required={props.required}
            id={'field-'+props.fieldName}
            placeholder={props.schema.default}
            description={props.schema.description}
            schema={props.schema}
            theme={props.theme}
        />
    )
}

allOfWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.object,
    multiple: PropTypes.bool,
    required: PropTypes.bool,
}

export default allOfWidget
