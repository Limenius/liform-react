import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from '../../../../src/'

const MyBaseForm = props => {
    const { schema, handleSubmit, theme, error, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {error && <strong>{error}</strong>}
                {error && <hr/>}
            </div>
            {renderField(schema, null, theme || DefaultTheme)}
            <button className="btn btn-primary" type="submit" disabled={submitting}><span className="glyphicon glyphicon-chevron-right"></span></button>
        </form>)
}

const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'type':'object',
        'properties': {
            'title': { 'type':'string', 'widget': 'textarea', 'title': 'Title' },
            'type': { 'enum':[ 'One','Two' ], 'type':'string', 'title': 'Select a type' },
            'color': { 'type':'string', 'widget': 'color', 'title': 'In which color' },
            'checkbox': { 'type':'boolean', 'title': 'I agree with your terms' }
        }
    }

    return (
        <Provider store={store}>
            <Liform schema={schema} onSubmit={(v) => {console.log(v)}} baseForm={MyBaseForm}/>
        </Provider>
    )
}


ReactDOM.render(
    <Demo/>,
    document.getElementById('placeholder')
)

