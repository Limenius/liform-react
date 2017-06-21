import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Field } from 'redux-form'
import renderField from '../../renderField'
import _ from 'lodash'

class renderSelect extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            choice: ''
        }
    }
    
    render() {
        const field = this.props
        const className = classNames([
            'form-group',
            { 'has-error' : field.meta.touched && field.meta.error }
        ])
        const schema = field.schema
        const options = schema.oneOf
        const theme = field.theme
        const context = field.context

        return (
            <div className={className}>
                <label className="control-label" htmlFor={'field-'+field.fieldName}>{schema.title}</label>
                <select className="form-control" onClick={(e)=> this.showItem(options[e.target.value], e.target.value, theme, field.fieldName, context)} id={'field-'+field.fieldName} required={field.required} multiple={false}>
                    { !field.required && !field.multiple && <option key={''} value={''}>{field.placeholder}</option> }
                    { _.map(options, item => {
                        return <option key={options.indexOf(item)}  value={options.indexOf(item)}>{item.title}</option>
                    })}
                </select>
                <div className="container">
                    {
                        this.state.choice
                    }
                </div>
                { field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span> }
                { field.description && <span className="help-block">{field.description}</span> }
            </div>
        )
    }
    showItem(item, idx, theme, name, context) {
        this.setState({ choice: renderField({ ...item, showLabel : true }, idx.toString(), theme, name+'.', context) })
    }
}


const OneOfChoiceWidget = props => {
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
            theme={props.theme}
            context={props.context}
            fieldName={props.fieldName}
        />
    )
}

OneOfChoiceWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.object,
    multiple: PropTypes.bool,
    required: PropTypes.bool,
}

export default OneOfChoiceWidget
