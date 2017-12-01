Liform relies by default on [*ajv*](https://github.com/epoberezkin/ajv) to perform on blur validation. You can pass your custom validator using the `prop` `validate`.

For validation on submit you can provide a validator using the `onSubmit` `prop`. For this, check the documentation of *redux-form*. This example adapted directly from its documentation.
