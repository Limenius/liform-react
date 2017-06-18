We can use `$ref` to include snippets defined elsewhere, to avoid repeated definitions.

In this case we are defining the `address` and later using it.

```
import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from 'liform-react'

const MyForm = () => {
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
```
