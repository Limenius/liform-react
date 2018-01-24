import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from '../../../../src/'

const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'tabs': 3,
        'type':'object',
        'properties': {
            'title': { 'type':'string', 'title': 'Title', "tab": 1 },
            'type': { 'enum':[ 'One','Two' ], 'type':'string', 'title': 'Select a type', "tab": 2 },
            'color': { 'type':'string', 'widget': 'color', 'title': 'In which color', "tab": 3 },
            'checkbox': { 'type':'boolean', 'title': 'I agree with your terms' }
        }
    }
    return (
        <Provider store={store}>
            <Liform schema={schema} onSubmit={(v) => {console.log(v)}}/>
        </Provider>
    )
}

ReactDOM.render(
    <Demo/>,
    document.getElementById('placeholder')
)
