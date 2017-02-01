import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform, { DefaultTheme } from 'liform-react'
import Markdown from './Markdown'
import { Field } from 'redux-form'


const RenderInput = field => {
    return (
        <div>
            <label>{field.label}</label>
            <input {...field.input} type="text"/>
            {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
            {field.description && <span>{field.description}</span>}
        </div>
    )
}

const MyStringWidget = (props) => {
    return (
        <Field
            component={RenderInput}
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

const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const myTheme = { ...DefaultTheme, string: MyStringWidget }
    const schema = {
        'type':'object',
        'properties': {
            'title': { 'type':'string', 'title': 'Title' },
            'type': { 'enum':[ 'One','Two' ], 'type':'string', 'title': 'Select a type' },
            'color': { 'type':'string', 'format': 'color', 'title': 'In which color' },
            'checkbox': { 'type':'boolean', 'title': 'I agree with your terms' }
        }
    }
    return (
        <Provider store={store}>
            <Liform schema={schema} theme={myTheme} onSubmit={(v) => {console.log(v)}}/>
        </Provider>
    )
}


const Simple = () => (
  <div>
    <h2>Create (or modify) a theme</h2>
    <h3>Form</h3>
    <Demo/>
    <h3>Code</h3>
    <Markdown page={require('../Content/CreateTheme.md')}/>
  </div>
)

export default Simple
