Here we go

```
import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from 'liform-react'

const AllWidgets = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'type':'object',
        'properties': {
            'choice': {
                'type': 'string',
                'enum': [
                    'foo',
                    'bar'
                ]
            },
            'string': {
                'type': 'string'
            },
            'checkbox': {
                'type': 'boolean',
            },
            'color': {
                'type': 'string',
                'widget': 'color'
            },
            'date': {
                'type': 'string',
                'widget': 'date'
            },
            'datetime': {
                'type': 'string',
                'widget': 'datetime'
            },
            'compatible-date': {
                'type': 'string',
                'widget': 'compatible-date',
                'format': 'date'
            },
            'compatible-datetime': {
                'type': 'string',
                'widget': 'compatible-datetime',
                'format': 'date-time'
            },
            'email': {
                'type': 'string',
                'widget': 'email',
                'format': 'email'
            },
            'money': {
                'type': 'string',
                'widget': 'money'
            },
            'number': {
                'type': 'number',
                'widget': 'number'
            },
            'password': {
                'type': 'string',
                'widget': 'password'
            },
            'percent': {
                'type': 'number',
                'widget': 'percent'
            },
            'search': {
                'type': 'string',
                'widget': 'search'
            },
            'textarea': {
                'type': 'string',
                'widget': 'textarea'
            },
            'url': {
                'type': 'string',
                'widget': 'url'
            },
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

