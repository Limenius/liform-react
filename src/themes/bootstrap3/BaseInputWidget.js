import React from 'react'
import classNames from 'classnames'
import { Field } from 'redux-form'

const renderInput = field => {
    const className = classNames([
        'form-group',
        { 'has-error' : field.meta.touched && field.meta.error }
    ])
    return (
        <div className={className}>
            <label className="control-label" htmlFor={'field-'+field.name}>{field.label}</label>
            <input {...field.input} type={field.type} className="form-control"/>
            {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
            {field.description && <span className="help-block">{field.description}</span>}
        </div>
    )
}


const BaseInputWidget = props =>  {
    return (
        <Field
            component={renderInput}
            label={props.label}
            name={props.fieldName}
            required={props.required}
            id={'field-'+props.fieldName}
            placeholder={props.schema.default}
            description={props.schema.description}
            type={props.type}
        />
    )
}

BaseInputWidget.propTypes = {
    schema: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired
}

export default BaseInputWidget
