import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Field } from 'redux-form'
import fieldPath from '../../util'

const renderInput = field => {
    const className = classNames([
        'form-group',
        { 'has-error' : field.meta.touched && field.meta.error }
    ])
    return (
        <div className={className}>
            <label className="control-label" htmlFor={field.id}>{field.label}</label>
            <a className="field-doc" href={"getDoc.do?path="+fieldPath(field)} target="_BLANK"><span className="glyphicon glyphicon-question-sign"></span></a>
            <input {...field.input} type={field.type} required={field.required} className="form-control" placeholder={field.placeholder} />
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
            doc={props.schema.doc}
            type={props.type}
            normalize={props.normalizer}
        />
    )
}

BaseInputWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    required: PropTypes.bool,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    normalizer: PropTypes.func,
}

export default BaseInputWidget
