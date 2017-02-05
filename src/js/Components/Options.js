import React from 'react'
import Markdown from './Markdown'
import Liform, { renderField, DefaultTheme } from 'liform-react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'

const SimplestLayout = props => {
    const { schema, handleSubmit, theme } = props
    return (
        <form onSubmit={handleSubmit}>
            {renderField(schema, schema.title, theme || DefaultTheme)}
        </form>)
}


const Demo = ({ schema, layout }) => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    return (
        <div className="row">
            <div className="col-md-6">
                <pre>
                    {schema}
                </pre>
            </div>
            <div className="col-md-6">
                <Provider store={store}>
                    <Liform schema={JSON.parse(schema)} 
                        onSubmit={(v) => {
                            console.log(v)
                            return
                        }} baseForm={layout}

                        />
                </Provider>
            </div>
        </div>
    )
}


const Options = () => (
  <div>
    <h2>Options</h2>
    <h3>Formatting</h3>
    <Markdown page={require('../Content/Options.md')}/>
    <h4>title</h4>
    <Markdown page={require('../Content/Options/Title.md')}/>
    <Demo schema={
`{
    "properties": {
        "name": { "type":"string", "title": "Hi! I am a Title" }
    }
}`
        } layout={SimplestLayout}/>
    <h4>default</h4>
    <Markdown page={require('../Content/Options/Default.md')}/>
    <Demo schema={
`{
    "properties": {
        "name": { "type":"string", "default":"Nacho" }
    }
}`
        } layout={SimplestLayout}/>
    <h4>widget</h4>
    <Markdown page={require('../Content/Options/Format.md')}/>
    <Demo schema={
`{
    "properties": {
        "description": { "type":"string", "widget":"textarea" }
    }
}`
        } layout={SimplestLayout}/>
    <h4>propertyOrder</h4>
    <Markdown page={require('../Content/Options/PropertyOrder.md')}/>
    <Demo schema={
`{
    "properties": {
        "description": { "type":"string", "propertyOrder":2 },
        "title": { "type":"string", "propertyOrder":1 }
    }
}`
        } layout={SimplestLayout}/>
    <h3>Validation</h3>
    <h4>required</h4>
    <Markdown page={require('../Content/Options/Required.md')}/>
    <Demo schema={
`{
    "required" : [ "title" ],
    "properties": {
        "title": { "type":"string" },
        "description": { "type":"string" }
    }
}`
    }/>
    <h4>maxLength</h4>
    <Markdown page={require('../Content/Options/MaxLength.md')}/>
    <Demo schema={
`{
    "properties": {
        "title": { "type":"string", "maxLength": 4 }
    }
}`
    }/>
    <h4>minLength</h4>
    <Markdown page={require('../Content/Options/MinLength.md')}/>
    <Demo schema={
`{
    "properties": {
        "title": { "type":"string", "minLength": 2 }
    }
}`
    }/>
  </div>
)

export default Options
