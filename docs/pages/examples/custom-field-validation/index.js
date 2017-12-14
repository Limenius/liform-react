import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer, Field } from 'redux-form'
import { Provider } from 'react-redux'
import Liform, { DefaultTheme } from '../../../../src/'
import classNames from "classnames"

const RenderPassword = field => {
    const className = classNames([
        'form-group',
        { 'has-error' : field.meta.touched && (field.meta.error || field.meta.warning) }
    ])
    return (
        <div className={className}>
            <label className="control-label" htmlFor={'field-'+field.name}>{field.label}</label>
            <input {...field.input} type="password" className="form-control" placeholder={field.placeholder} />
            {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
            {field.meta.touched && field.meta.warning && <span className="help-block">{field.meta.warning}</span>}
            {field.description && <span className="help-block">{field.description}</span>}
        </div>
    )
}

const violations = value => {
    let rulesViolated = 4
    const letter = /[a-z]/
    const upper  =/[A-Z]/
    const number = /[0-9]/
    if (value && value.length > 6) {
        rulesViolated --
    }
    if (letter.test(value)) {
        rulesViolated --
    }
    if (upper.test(value)) {
        rulesViolated --
    }
    if (number.test(value)) {
        rulesViolated --
    }
    return rulesViolated
}

const validatePassword = value => {
    if (violations(value) > 2) {
        return 'Password is VERY weak'
    }
}

const warnPassword = value => {
    const rulesViolated = violations(value)
    if (rulesViolated > 0 && rulesViolated <= 2) {
        return 'Password is weak'
    }
}

const MyPasswordWidget = (props) => {
    return (
        <Field
            component={RenderPassword}
            label={props.label}
            name={props.fieldName}
            required={props.required}
            id={'field-'+props.fieldName}
            placeholder={props.schema.default}
            description={props.schema.description}
            validate={validatePassword}
            warn={warnPassword}
            type={props.type}
        />
    )
}

const validateRepeatedPassword = (value, allValues) => {
    if (allValues.password != allValues.password_again) {
        return 'Passwords don\'t match'
    }
}

const MyPasswordRepeatedWidget = (props) => {
    return (
        <Field
            component={RenderPassword}
            label={props.label}
            name={props.fieldName}
            required={props.required}
            id={'field-'+props.fieldName}
            placeholder={props.schema.default}
            description={props.schema.description}
            validate={validateRepeatedPassword}
            type={props.type}
        />
    )
}
const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const myTheme = { ...DefaultTheme, password: MyPasswordWidget, repeatedpassword: MyPasswordRepeatedWidget }
    const schema = {
        'type':'object',
        'properties': {
            'password': { 'type':'string', 'title': 'Password', 'widget': 'password' },
            'password_again': { 'type':'string', 'title': 'Repeat Password', 'widget': 'repeatedpassword' },
        }
    }
    return (
        <Provider store={store}>
            <Liform schema={schema} theme={myTheme} onSubmit={(v) => {console.log(v)}}/>
        </Provider>
    )
}

ReactDOM.render(
    <Demo/>,
    document.getElementById('placeholder')
)

