Liform comes with a theme written for Bootstrap 3. However, you can of course write your own theme or modify another theme by providing widgets.

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

So you can simply write a Widget that will be used whenever a field of a given type or widget is required.

### Writing a widget

Suppose that we want to override the widget for `string` with a simple `input` tag, with no Bootstrap markup. We have to define a field using `redux-form`. Check out the documentation of `redux-form` for more details on what is a `Field` or a `Field Array` if you are not familiarized with it.

If you feel like you need to add additional options to your schema, just do so. In this case we are defining the option `labelColor` in the schema and making use of it. Since the field has access to the schema of the property, we can just access it.


```
import { Field } from 'redux-form'

const RenderInput = field => {
    return (
        <div>
            <label style={color: field.schema.labelColor}>{field.label}</label>
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


### Full code
```
import { Field } from 'redux-form'


const RenderInput = field => {
    return (
        <div>
            <label style={{ color: field.labelColor }}>{field.label}</label>
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
            labelColor={props.schema.labelColor}
            type={props.type}
        />
    )
}

const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)
const myTheme = { ...DefaultTheme, string: MyStringWidget }
const schema = {
    'type':'object',
    'properties': {
        'title': { 'type':'string', 'title': 'Title', 'labelColor' : '#aa0000' },
        'type': { 'enum':[ 'One','Two' ], 'type':'string', 'title': 'Select a type' },
        'color': { 'type':'string', 'widget': 'color', 'title': 'In which color' },
        'checkbox': { 'type':'boolean', 'title': 'I agree with your terms' }
    }
}
return (
    <Provider store={store}>
        <Liform schema={schema} theme={myTheme} onSubmit={(v) => {console.log(v)}}/>
    </Provider>
)
```
