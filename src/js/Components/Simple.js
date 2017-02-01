import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform, { renderField, DefaultTheme } from 'liform-react'
import Markdown from './Markdown'

const MyBaseForm = props => {
    const { schema, handleSubmit, theme, error, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            {renderField(schema, schema.title, theme || DefaultTheme)}
            <div>
                {error && <strong>{error}</strong>}
            </div>
            <button className="btn btn-primary" type="submit" disabled={submitting}>Submit o!</button>
        </form>)
}

const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'type':'object',
        'properties': {
            'title': { 'type':'string', 'format': 'textarea', 'title': 'Title' },
            'type': { 'enum':[ 'One','Two' ], 'type':'string', 'title': 'Select a type' },
            'color': { 'type':'string', 'format': 'color', 'title': 'In which color' },
            'checkbox': { 'type':'boolean', 'title': 'I agree with your terms' }
        }
    }
    return (
        <Provider store={store}>
            <Liform schema={schema} onSubmit={(v) => {console.log(v)}} baseForm={MyBaseForm}/>
        </Provider>
    )
}


const Simple = () => (
  <div>
    <h2>Simple Form</h2>
    <h3>Form</h3>
    <Demo/>
    <h3>Code</h3>
    <Markdown page={require('../Content/Simple.md')}/>
  </div>
)

export default Simple
