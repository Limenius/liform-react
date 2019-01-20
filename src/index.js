import React from "react";
import PropTypes from "prop-types";
import DefaultTheme from "./themes/bootstrap3/sync-validation";
import DefaultThemeFieldValidation from "./themes/bootstrap3/field-validation";
import { reduxForm } from "redux-form";
import renderFields from "./renderFields";
import renderField from "./renderField";
import processSubmitErrors from "./processSubmitErrors";
import buildSyncValidation from "./buildSyncValidation";
import fieldValidation from "./fieldValidation";
import { setError } from "./buildSyncValidation";
import compileSchema from "./compileSchema";

const BaseForm = props => {
  const { schema, handleSubmit, theme, error, submitting, context } = props;
  const defaultTheme = props.fieldValidation ? DefaultThemeFieldValidation : DefaultTheme;
  return (
    <form onSubmit={handleSubmit}>
      {renderField(schema, null, theme || defaultTheme, "", context)}
      <div>{error && <strong>{error}</strong>}</div>
      <button className="btn btn-primary" type="submit" disabled={submitting}>
        Submit
      </button>
    </form>
  );
};

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

const EmbeddedLiform = props => {
  const schema = compileSchema(props.schema);

  return renderField(schema, 
    props.fieldName || null, 
    props.theme || DefaultThemeFieldValidation,
    props.prefix || "");
  
}


Liform.propTypes = {
  schema: PropTypes.object,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  fieldValidatoin: PropTypes.bool,
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
  setError,
  EmbeddedLiform,
  buildSyncValidation,
  fieldValidation,
  compileSchema
};
