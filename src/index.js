import React, { Component } from "react";
import PropTypes from "prop-types";
import DefaultTheme from "./themes/bootstrap3";
import { reduxForm } from "redux-form";
import renderFields from "./renderFields";
import renderField from "./renderField";
import processSubmitErrors from "./processSubmitErrors";
import buildSyncValidation from "./buildSyncValidation";
import { setError } from "./buildSyncValidation";
import compileSchema from "./compileSchema";

//Creates the 'tabs'.  Sets the id, onClick function, and tabName
const Button = props => {
  const { tabClick, tabNum, tabName } = props;
  return (
    <button id={tabNum} onClick={tabClick}>
      {tabName}
    </button>
  );
};

//Changed BaseForm from a stateless functional component to a stateful class component
class BaseForm extends Component {
  constructor(props) {
    super(props);

    this.tabClick = this.tabClick.bind(this);
  }

  //The state 'tab' determines which form is being displayed.
  state = {
    tab: 0
  };

  //Function that grabs the id of the tab that was clicke dand changes the tab state
  tabClick = ele => {
    this.setState({ tab: parseInt(ele.target.id) });
  };

  render() {
    const {
      schema,
      handleSubmit,
      theme,
      error,
      submitting,
      context
    } = this.props;

    //Constructor function to create Schemas for each tab.
    function Schema() {
      this.type = "object";
      this.properties = {};
    }

    //If the schema has tabs, the following code will execute.
    if (schema.tabs) {
      //array to hold the tab buttons
      let tabs = [];
      //array to hold the form schemas
      let forms = [];

      //Loop to create the tabs and schemas
      for (let i = 0, j = schema.tabs; i < j; i+=1) {
        tabs.push(
          <Button
            tabName={schema.tabNames[i]}
            key={i}
            tabNum={i}
            tabClick={this.tabClick}
          />
        );

        forms.push(new Schema());
      }

      //Breaks schema.properties into an array of arrays that contain key and value pairs
      let propsKeysAndVals = Object.entries(schema.properties);

      //Loop for adding descendants to properties
      for (let i = 0, j = propsKeysAndVals.length; i < j; i+=1) {
        //The index for the corresponding Schema in the forms array
        let formsIndex = propsKeysAndVals[i][1].tab - 1;
        //Setting variables to hold the key value pairs
        let key = propsKeysAndVals[i][0];
        let vals = propsKeysAndVals[i][1];
        //Sets the new key and value pair on properties
        forms[formsIndex].properties[key] = vals;
      }

      //Map the formsArray to create each form
      let formsArray = forms.map(schema => {
        return (
          <form onSubmit={handleSubmit}>
            {renderField(schema, null, theme || DefaultTheme, "", context)}
            <div>{error && <strong>{error}</strong>}</div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={submitting}
              onClick={this.buttonClick}
            >
              Submit
            </button>
          </form>
        );
      });

      //Function to conditionally render the appopriate form based on the tab state.
      let form = tabs => {
        for (let i = 0, j = tabs; i < j; i+=1) {
          if (this.state.tab === i) {
            return formsArray[i];
          }
        }
      };

      //Function to conditionally render the appopriate header based on the tab state.
      let header = tabs => {
        for (let i = 0, j = tabs; i < j; i++) {
          if (this.state.tab === i) {
            return i;
          }
        }
      };

      return (
        <div>
          <div>{tabs}</div>
          <h1>{schema.tabNames[header(schema.tabs)]}</h1>
          <div>{form(schema.tabs)}</div>
        </div>
      );
    } else {
      return (
        <form onSubmit={handleSubmit}>
          {renderField(schema, null, theme || DefaultTheme, "", context)}
          <div>{error && <strong>{error}</strong>}</div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={submitting}
            onClick={this.buttonClick}
          >
            Submit
          </button>
        </form>
      );
    }
  }
}

// PropTypes to  check tabs and tabNames are the correct data type.
BaseForm.propTypes = {
  schema: PropTypes.shape({
    tabs: PropTypes.number,
    tabNames: PropTypes.arrayOf(PropTypes.string),
  })
}


const Liform = props => {
  props.schema.showLabel = false;
  const schema = compileSchema(props.schema);
  const formName = props.formKey || props.schema.title || "form";
  const FinalForm = reduxForm({
    form: props.formKey || props.schema.title || "form",
    validate: props.syncValidation || buildSyncValidation(schema, props.ajv),
    initialValues: props.initialValues,
    context: { ...props.context, formName }
  })(props.baseForm || BaseForm);
  return (
    <FinalForm
      renderFields={renderField.bind(this)}
      {...props}
      schema={schema}
    />
  );
};

Liform.propTypes = {
  schema: PropTypes.object,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  syncValidation: PropTypes.func,
  formKey: PropTypes.string,
  baseForm: PropTypes.func,
  context: PropTypes.object,
  ajv: PropTypes.object
};

export default Liform;

export {
  renderFields,
  renderField,
  processSubmitErrors,
  DefaultTheme,
  setError
};
