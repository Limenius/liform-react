liform-react
============

![tests](https://api.travis-ci.org/Limenius/liform-react.svg?branch=master)

Library for generating React forms from [JSON schema](http://json-schema.org/) using the fantastic [redux-form](https://github.com/erikras/redux-form).

**https://limenius.github.io/liform-react/**

# Installation

```
npm install liform-react --save
```

# Basic usage

```jsx
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
            "description": { "type":"string", "title": "Description", "widget": "textarea" }
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
```

And, provided that you have a `<div id="form-holder">`, you should see something like this:

![](https://raw.githubusercontent.com/Limenius/liform-react/master/docs/images/example-liform-react.png)

