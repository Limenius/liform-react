import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from 'liform-react'

const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'type':'object',
        'properties':{
            'title':{
                'type':'string',
                'title':'Some text',
                'description':'This is a help message',
            },
            'description':{
                'type':'string',
                'format':'textarea',
                'title':'Description',
                'default':'A description...',
            }
        }
    }
    return (
        <Provider store={store}>
            <Liform schema={schema} onSubmit={(v) => {console.log(v)}}/>
        </Provider>
    )
}

const Code = () => (
    <pre>{`
    import React from 'react'
    import { createStore, combineReducers } from 'redux'
    import { reducer as formReducer } from 'redux-form'
    import { Provider } from 'react-redux'
    import Liform from 'liform-react'

    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        "type":"object",
        "properties":{
            "title":{
                "type":"string",
                "title":"Some text",
                "description":"This is a help message",
            },
            "description":{
                "type":"string",
                "format":"textarea",
                "title":"Description",
                "default":"A description...",
            }
        }
    }
    return (
        <Provider store={store}>
            <Liform schema={schema} onSubmit={(v) => {console.log(v)}}/>
        </Provider>
    )
    `}</pre>
)

const Json = () => (
    <pre>{`
    {
        "type":"object",
        "properties":{
            "title":{
                "type":"string",
                "title":"Some text",
                "description":"This is a help message",
                "propertyOrder":2
            },
            "description":{
                "type":"string",
                "format":"textarea",
                "default":"A description...",
                "propertyOrder":3
            }
        }
    }`}</pre>
)

const Simple = () => (
  <div>
    <h2>Simple Example</h2>
    <div className="row">
        <div className="col-md-6">
            <Code/>
        </div>
        <div className="col-md-6">
            <Demo/>
        </div>
    </div>
  </div>
)

export default Simple
