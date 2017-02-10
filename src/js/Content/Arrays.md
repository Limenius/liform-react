Arrays are just regular items. Currently, the default theme has two ways of represent them (you can of course write your own widget for arrays).

An array of other objects will be presented as a collection where you can add more items or remove them.

An array of strings with the restriction `uniqueItems` will be presented as multiple choice list.

```
import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from 'liform-react'

const ArrayExample = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'type':'object',
        'properties': {
            'tasks': {
                'type':'array',
                'title': 'A list of objects',
                'items': {
                    'type': 'object',
                    'properties': {
                        'name': {
                            'type': 'string',
                            'title': 'Name of the Task'
                        },
                        'dueTo': {
                            'type': 'string',
                            'title': 'Due To',
                            'widget': 'datetime',
                            'format': 'date-time'
                        }
                    }
                }
            },
            'multiple': {
                'type': 'array',
                'title': 'Multiple choices',
                'items': {
                    'type': 'string',
                    'enum': [
                        '1',
                        '2'
                    ],
                    'enum_titles': [ 'one', 'two' ]
                },
                'uniqueItems': true
            },
        }
    }
    return (
        <Provider store={store}>
            <Liform schema={schema} onSubmit={(v) => {console.log(v)}} initialValues={{
                'tasks' : [
                    { 'name' : 'first task' },
                ],
                'multiple' : [ '1' ]
            }}/>
        </Provider>
    )
}
```
