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
            'color': { 'type':'string', 'format': 'color', 'title': 'In which color' },
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


const Simple = () => (
  <div>
    <h2>References</h2>
    <h3>Form</h3>
    <Demo/>
    <h3>Code</h3>
    <Markdown page={require('../Content/Refs.md')}/>
  </div>
)

export default Simple
