import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from 'liform-react'
const code = require('./Home.md');

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
    <div>
         <div dangerouslySetInnerHTML={{ __html: code }}/>
    </div>
)

const Simple = () => (
  <div>
    <h2>Simple Form</h2>
    <h3>Form</h3>
    <Demo/>
    <h3>Code</h3>
    <Code/>
  </div>
)

export default Simple
