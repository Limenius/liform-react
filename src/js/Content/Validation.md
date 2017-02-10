Liform relies by default on *ajv* to perform on blur validation. You can pass your custom validator using the `prop` `validate`.

For validation on submit you can provide a validator using the `onSubmit` `prop`. For this, check the documentation of *redux-form*. This example adapted directly from its documentation:

```
const Validation = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'type':'object',
        'properties': {
            'username': { 'type':'string', 'title': 'Username' },
            'password': { 'type':'string', 'title': 'Password', 'widget': 'password' },
            'email': { 'type':'string', 'format': 'email', 'title': 'E-mail', 'widget': 'email' },
        }
    }
    
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    
    return (
        <Provider store={store}>
            <Liform schema={schema} onSubmit={(values) => {
                return sleep(1000) // simulate server latency
                    .then(() => {
                        if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
                            throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
                        } else if (values.password !== 'redux-form') {
                            throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
                        } else {
                            window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
                        }
                    })
            }}/>
        </Provider>
    )
}
```
