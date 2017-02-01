Simply by providing an object that matches our schema as the `prop` `initialValues` we can have the form initialized.

```
const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'type':'object',
        'properties': {
            'title': { 'type':'string', 'title': 'Title' },
            'type': { 'enum':[ 'One','Two' ], 'type':'string', 'title': 'Select a type' },
            'color': { 'type':'string', 'format': 'color', 'title': 'In which color' },
            'checkbox': { 'type':'boolean', 'title': 'I agree with your terms' }
        }
    }
    const initialValues = {
        title : 'I am an initial title value',
        type : 'One',
        color : '#e4f533',


    }
    return (
        <Provider store={store}>
            <Liform schema={schema} initialValues={initialValues} onSubmit={(v) => {console.log(v)}}/>
        </Provider>
    )
}
```
