import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import Liform from '../src/';

const reducer = combineReducers({
    form: formReducer
})

// Contributors: This is a sandbox to play with liform-react without installing the package
var schema = {
            properties: {
                columns: {
                    type: "array",
                    minItems: 1,
                    items: {
                        oneOf: [
                            {
                                properties: {
                                   name: {
                                       title: "name",
                                       type: "string"
                                   }, 
                                   email: {
                                       "type": "string",
                                       title: "Email",
                                       format: 'email'
                                   }
                                },
                                title: "namer",
                                required: ["email", "name"]                                
                            },
                            {
                                properties: {
                                    pass: {
                                        title: "pass",
                                        type: "string",
                                        format: "password"
                                    }, 
                                    phone: {
                                        "type": "string",
                                        title: "Phone"
                                    }, 
                                },
                                title: "Authentication",
                                required: ["pass", "phone"]
                            }
                        ]
                    }
                },
            },
            required:["columns"]
        }
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

const showResults = values => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}

const dest = document.getElementById('form-holder')

ReactDOM.render(
    <Provider store={store}>
        <div style={{
            width: '500px',
            margin: '0 auto',
        }}>
        <Liform schema={schema} onSubmit={showResults} />
    </div>
    </Provider>,
    dest
)
