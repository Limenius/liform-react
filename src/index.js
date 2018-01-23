import React from "react";
import PropTypes from "prop-types";
import DefaultTheme from "./themes/bootstrap3";
import { reduxForm } from "redux-form";
import renderFields from "./renderFields";
import renderField from "./renderField";
import processSubmitErrors from "./processSubmitErrors";
import buildSyncValidation from "./buildSyncValidation";
import { setError } from "./buildSyncValidation";
import compileSchema from "./compileSchema";
import styled from 'styled-components'
const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;

const BaseForm = props => {
  const { schema, handleSubmit, theme, error, submitting, context } = props;
  return (
    <Div>
    <form onSubmit={handleSubmit}>
      {renderField(schema, null, theme || DefaultTheme, "", context)}
      <div>{error && <strong>{error}</strong>}</div>
      <button className="btn btn-primary" type="submit" disabled={submitting}>
        Submit
      </button>
    </form>
    </Div>
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
