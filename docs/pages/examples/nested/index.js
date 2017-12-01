import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { Provider } from "react-redux";
import Liform from "../../../../src/";

const Demo = () => {
  const reducer = combineReducers({ form: formReducer });
  const store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  const schema = {
    type: "object",
    properties: {
      po: {
        type: "object",
        properties: { num: { type: "number", maximum: 9 } }
      },
      type: { enum: ["One", "Two"], type: "string", title: "Select a type" },
      color: { type: "string", widget: "color", title: "In which color" },
      checkbox: { type: "boolean", title: "I agree with your terms" }
    }
  };
  return (
    <Provider store={store}>
      <Liform
        schema={schema}
        onSubmit={v => {
          console.log(v);
        }}
      />
    </Provider>
  );
};

ReactDOM.render(<Demo />, document.getElementById("placeholder"));
