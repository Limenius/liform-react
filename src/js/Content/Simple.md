In this example we are basically setting up Redux with redux-form and using the `Liform` component with a simple json-schema.

The form state will be mounted by default on the key `form` of the Redux state. If you provide a `formKey` prop to the `Liform` component, it will be used instead. Or, with a lower priority, you can provide a `title` property in the root object of oyour schema.

```
import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from 'liform-react'

const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)
const schema = {
        'type':'object',
        'properties': {
            'title': { 'type':'string', 'title': 'Title' },
            'type': { 'enum':[ 'One','Two' ], 'type':'string', 'title': 'Select a type' },
            'color': { 'type':'string', 'widget': 'color', 'title': 'In which color' },
            'checkbox': { 'type':'boolean', 'title': 'I agree with your terms' }
        }
    }
}
return (
    <Provider store={store}>
        <Liform schema={schema} onSubmit={(v) => {console.log(v)}}/>
    </Provider>
)
```
