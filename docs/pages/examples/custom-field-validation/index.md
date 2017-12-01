To provide custom validation, there are two options:

* Provide a validator in the `validate` prop of `Liform`. Check out [the default validator](https://github.com/Limenius/liform-react/blob/master/src/buildSyncValidation.js). You can provide a version based on `ajv` or roll your own.
* Provide a validator in a new widget. To do so you have to extend or provide a new theme and implement the validator in the field. You can check the documentation of redux-form to know how to do this. Below you have an example of this.
