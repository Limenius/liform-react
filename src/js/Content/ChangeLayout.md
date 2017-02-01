What if instead of writing our own widgets we want to change the form's layout?
The default layout has a simple submit button with the text "Submit" and shows global errors just above of it.

This is its code:

```
const BaseForm = props => {
    const { schema, handleSubmit, theme, error, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            {renderField(schema, schema.title, theme || DefaultTheme)}
            <div>
                {error && <strong>{error}</strong>}
            </div>
            <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
        </form>)
}
```

But we can write our own component and pass it to Liform as props. Let's say that we want to show the errors at the beginning, then an `<hr>` (maybe because that HTML element is a pet peeve of us), and also change the Submit button text for an icon. Let's do that:


```
const MyBaseForm = props => {
    const { schema, handleSubmit, theme, error, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {error && <strong>{error}</strong>}
                {error && <hr/>}
            </div>
            {renderField(schema, schema.title, theme || DefaultTheme)}
            <button className="btn btn-primary" type="submit" disabled={submitting}>Submit-o!</button>
        </form>)
}

const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'type':'object',
        'properties': {
            'title': { 'type':'string', 'format': 'textarea', 'title': 'Title' },
            'type': { 'enum':[ 'One','Two' ], 'type':'string', 'title': 'Select a type' },
            'color': { 'type':'string', 'format': 'color', 'title': 'In which color' },
            'checkbox': { 'type':'boolean', 'title': 'I agree with your terms' }
        }
    }
    return (
        <Provider store={store}>
            <Liform schema={schema} onSubmit={(v) => {console.log(v)}} baseForm={MyBaseForm}/>
        </Provider>
    )
}
```
