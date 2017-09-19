import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from 'liform-react'
import Markdown from './Markdown'


const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
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
    //    const schema = {
    //  "definitions": {
    //    "address": {
    //      "type": "object",
    //      "properties": {
    //        "street_address": {
    //          "type": "string"
    //        },
    //        "city": {
    //          "type": "string"
    //        },
    //        "state": {
    //          "type": "string"
    //        }
    //      },
    //      "required": [
    //        "street_address",
    //        "city",
    //        "state"
    //      ]
    //    }
    //  },
    //  "allOf": [
    //    {
    //      "$ref": "#/definitions/address"
    //    },
    //    {
    //      "properties": {
    //        "type": {
    //          "type": "string",
    //          "enum": [
    //            "residential",
    //            "business"
    //          ]
    //        }
    //      }
    //    }
    //  ]
    //}
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
