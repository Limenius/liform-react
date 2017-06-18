import React from 'react'
import Liform from 'liform-react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom'

const Demo = ({ schema, layout }) => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    return (
        <div className="row">
            <div className="col-md-6">
                <pre>
                    {schema}
                </pre>
            </div>
            <div className="col-md-6">
                <Provider store={store}>
                    <Liform schema={JSON.parse(schema)} 
                        onSubmit={(v) => {
                            console.log(v)
                            return
                        }} baseForm={layout}

                        />
                </Provider>
            </div>
        </div>
    )
}

const Main = () => {
    return (
        <div className="home">
            <h1>liform-react</h1>
            <p>
                <strong>Liform</strong> is an extensible form generator for React (and ReactNative) from <a href="http://json-schema.org/">JSON schema</a>. It uses the fantastic <a href="http://redux-form.com/">Redux Form</a>, so you can manage your state in a sane way with Redux, and the awesome <a href="https://github.com/epoberezkin/ajv">ajv</a> library for validation.
            </p>
            <p>
                It is extensible, so you can write your own themes or validators. There is a default theme provided based on Bootstrap.
            </p>
            <p>
                Do you want to know more? A good starting point would be to have a look to the <Link to="/examples">First Example</Link>
            </p>
            <div className="social">
            <iframe src="https://ghbtns.com/github-btn.html?user=Limenius&repo=liform-react&type=star&size=large" frameBorder="0" scrolling="0" width="100px" height="30px"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=Limenius&repo=liform-react&type=fork&size=large" frameBorder="0" scrolling="0" width="100px" height="30px"></iframe>
            </div>

            <Demo schema={
`{
  "properties": {
    "name": {
      "title":"Task name",
      "type":"string",
      "minLength": 2
    },
    "description": {
      "title":"Description",
      "type":"string",
      "widget":"textarea"
    },
    "dueTo": {
      "title":"Due to",
      "type":"string",
      "widget":"compatible-datetime",
      "format":"date-time"
    }
  },
  "required":["name"]
}`
            }/>

        </div>
    )
}

export default Main
