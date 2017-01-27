In this example we are basically setting up Redux with redux-form and using the `Liform` component with a simple json-schema.

```
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
```

