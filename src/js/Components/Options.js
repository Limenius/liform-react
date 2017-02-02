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

const Demo = ({ schema }) => {
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
                    <Liform schema={JSON.parse(schema)} onSubmit={(v) => {console.log(v)}} baseForm={SimplestLayout}/>
                </Provider>
            </div>
        </div>
    )
}


const Options = () => (
  <div>
    <h2>Options</h2>
    <Markdown page={require('../Content/Options.md')}/>
    <h3>title</h3>
    <Markdown page={require('../Content/Options/Title.md')}/>
    <Demo schema={
`{
    "properties": {
        "name": { "type":"string", "title": "Hi! I am a Title" }
    }
}`
        }/>
    <h3>default</h3>
    <Markdown page={require('../Content/Options/Default.md')}/>
    <Demo schema={
`{
    "properties": {
        "name": { "type":"string", "default":"Nacho" }
    }
}`
        }/>
    <h3>format</h3>
    <Markdown page={require('../Content/Options/Format.md')}/>
    <Demo schema={
`{
    "properties": {
        "description": { "type":"string", "format":"textarea" }
    }
}`
        }/>
    { /**/}
    <h3>propertyOrder</h3>
    <Markdown page={require('../Content/Options/PropertyOrder.md')}/>
    <Demo schema={
`{
    "properties": {
        "description": { "type":"string", "format":"textarea", "propertyOrder":2 },
        "title": { "type":"string", "format":"textarea", "propertyOrder":1 }
    }
}`
    }/>
{ /**/}
  </div>
)

export default Options
