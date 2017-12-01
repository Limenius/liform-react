In this example we are basically setting up Redux with redux-form and using the `Liform` component with a simple json-schema.

The form state will be mounted by default on the key `form` of the Redux state. If you provide a `formKey` prop to the `Liform` component, it will be used instead. Or, with a lower priority, you can provide a `title` property in the root object of oyour schema.

