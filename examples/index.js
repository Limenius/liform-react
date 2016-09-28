import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import Liform from 'liform-react';

const reducer = combineReducers({
  form: formReducer
})

var schema = {
    "title":"my form",
    "properties":
        {
            "name": { "type":"string","title":"Model", "default": "Ziummmm"},
            "description": { "type":"string", "title": "Description", "format": "textarea" }
        },
        "required":["name"]};

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

const showResults = values => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}

const dest = document.getElementById('form-holder')

ReactDOM.render(
    <Provider store={store}>
        <Liform schema={schema} onSubmit={showResults}/>
    </Provider>,
    dest
)
