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
        "description" : "schema validating people and vehicles",
        "type" : "object",
        "oneOf" : [{
            "properties" : {
                "firstName" : {
                    "type" : "string"
                },
                "lastName" : {
                    "type" : "string"
                },
                "sport" : {
                    "type" : "string"
                }
            },
            "required" : ["firstName"]
        }, {
            "properties" : {
                "vehicle" : {
                    "type" : "string"
                },
                "price" : {
                    "type" : "integer"
                }
            },
            "additionalProperties":false
        }]
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

