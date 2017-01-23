import React from 'react'
import classNames from 'classnames'
import { Field } from 'redux-form'
import BaseInputWidget from './BaseInputWidget'
import _ from 'lodash'

const renderSelect = field => {
    const className = classNames([
        'form-group',
        { 'has-error' : field.meta.touched && field.meta.error }
    ])
    const options = field.schema.enum

    const optionNames = (field.schema.liform && field.schema.liform.enum_titles) || options

    const selectOptions = _.zipObject(options, optionNames)
    return (
        <div className={className}>
            <label className="control-label" htmlFor={'field-'+field.name}>{field.label}</label>
            <select {...field.input} className="form-control" id={'field-'+field.name} required={field.required} placeholder={field.placeholder}>
                <option key={''} value={''}></option>
                { _.map(selectOptions, (name, value) => {
                    return <option key={value} value={value}>{name}</option>
                })}
            </select>

            {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
            {field.description && <span className="help-block">{field.description}</span>}
        </div>
    )
}

const selectField = props => {
    return (
        <Field
            component={renderSelect}
            label={props.label}
            name={props.fieldName}
            required={props.required}
            id={'field-'+props.fieldName}
            placeholder={props.schema.default}
            description={props.schema.description}
            schema={props.schema}
        />
    )
}

const StringWidget = props =>  {
    return props.schema.hasOwnProperty('enum') ? selectField(props) : BaseInputWidget({ ...props, type: 'text' })
}

StringWidget.propTypes = { schema: React.PropTypes.object.isRequired }

export default StringWidget
