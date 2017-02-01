Liform comes with a theme written for Bootstrap 3. However, you can of course write your own theme or modify another theme by providing widgets for the types or formats you are interested.

There is no need to write a *full theme*. It is possible that you don't need a widget for `color`, because your data simply doesn't deal with colors. In that case, you can simply left it undefined in your theme.

Themes are simly JavaScript objects. The DefaultTheme is something like:

```
export default {
    object: ObjectWidget,
    string: StringWidget,
    textarea: TextareaWidget,
    email: EmailWidget,
    integer: NumberWidget,
    number: NumberWidget,
    money: MoneyWidget,
    percent: PercentWidget,
    array: ArrayWidget,
    boolean: CheckboxWidget,
    password: PasswordWidget,
    search: SearchWidget,
    url: UrlWidget,
    color: ColorWidget,
    choice: ChoiceWidget,
}
```

So you can simply write a Widget that will be used whenever a field of a given type or format is required.

### Writing a widget

Suppose that we want to override the widget for `string` with a simple `input` tag, with no Bootstrap markup. We have to define a field using `redux-form`. Check out the documentation of `redux-form` for more details on what is a `Field` or a `Field Array` if you are not familiarized with it.

```
import { Field } from 'redux-form'

const RenderInput = field => {
    return (
        <div>
            <label>{field.label}</label>
            <input {...field.input} type="text"/>
            {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
            {field.description && <span>{field.description}</span>}
        </div>
    )
}

const MyStringWidget = (props) => {
    return (
        <Field
            component={RenderInput}
            label={props.label}
            name={props.fieldName}
            required={props.required}
            id={'field-'+props.fieldName}
            placeholder={props.schema.default}
            description={props.schema.description}
            type={props.type}
        />
    )
}

```

### Creating a derived theme

As themes are just objects, we can simply extend an existing theme with our new widget:

```
const myTheme = {...DefaultTheme, string: MyStringWidget}
```

And pass it as props when creating the `Liform` component:

```
<Liform schema={schema} theme={myTheme} onSubmit={(v) => {console.log(v)}}/>

```
