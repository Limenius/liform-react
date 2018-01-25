liform-tabs-react
============

Adds tab functionality to the liform-react component.  Original documentation for the liform-react component can be found here: [liform-react](https://github.com/Limenius/liform-react).


### Basic usage

```jsx
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
        'tabs': 3,
        'tabNames': ["Title", "Type", "Color"],
        'type':'object',
        'properties': {
            'title': { 'type':'string', 'title': 'Title', "tab": 1 },
            'type': { 'enum':[ 'One','Two' ], 'type':'string', 'title': 'Select a type', "tab": 2 },
            'color': { 'type':'string', 'widget': 'color', 'title': 'In which color', "tab": 3 },
            'checkbox': { 'type':'boolean', 'title': 'I agree with your terms', "tab": 1 }
        }
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
```

Added two new keys to schema and another key for the descendants of properties within schema.

- `'tabs':`  is a key on schema and the value is an integer representation of how many tabs will be displayed.
- `'tabNames':`  is a key on schema and the value is an array of strings that represent the title of the tabs.
- `'tab':` is a key on the descendants of properties and the value is an integer representation of which tab the field will appear on.

![liform-tabs-react-example](https://github.com/adamk1230/liform-tabs-react/blob/master/docs/images/example-liform-tabs-react.png "liform-tabs-react example")

### Running the Example

Run the 'simple' example to see the tab functionality.  The 'simple' is located example in `doc/pages/examples/simple`, clone this repository, then run:

```bash
npm install
webpack

cd doc/pages/examples/simple 
node server.js
```

### Tab Functionality Authors

- Adam Kwan

### Original Authors 

- found at [liform-react](https://github.com/Limenius/liform-react).