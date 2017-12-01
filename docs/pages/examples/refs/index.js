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
        'type':'object',
        'definitions': {
            'address': {
                'type': 'object',
                'properties': {
                    'street_address': {
                        'type': 'string'
                    },
                    'city': {
                        'type': 'string'
                    },
                    'state': {
                        'type': 'string'
                    }
                },
                'required': [
                    'street_address',
                    'city',
                    'state'
                ]
            }
        },
        'properties': {
            'title': { 'type':'string', 'title': 'Title' },
            'type': { 'enum':[ 'One','Two' ], 'type':'string', 'title': 'Select a type' },
            'color': { 'type':'string', 'widget': 'color', 'title': 'In which color' },
            'address': { 
                '$ref': '#/definitions/address'
            }
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

