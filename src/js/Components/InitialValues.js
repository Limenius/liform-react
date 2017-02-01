import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from 'liform-react'
import Markdown from './Markdown'

const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'type':'object',
        'properties': {
            'title': { 'type':'string', 'title': 'Title' },
            'type': { 'enum':[ 'One','Two' ], 'type':'string', 'title': 'Select a type' },
            'color': { 'type':'string', 'format': 'color', 'title': 'In which color' },
            'checkbox': { 'type':'boolean', 'title': 'I agree with your terms' }
        }
    }
    const initialValues = {
        title : 'I am an initial title value',
        type : 'One',
        color : '#e4f533',


    }
    return (
        <Provider store={store}>
            <Liform schema={schema} initialValues={initialValues} onSubmit={(v) => {console.log(v)}}/>
        </Provider>
    )
}


const InitialValues = () => (
  <div>
    <h2>Initial Values</h2>
    <h3>Form</h3>
    <Demo/>
    <h3>Code</h3>
    <Markdown page={require('../Content/InitialValues.md')}/>
  </div>
)

export default InitialValues
