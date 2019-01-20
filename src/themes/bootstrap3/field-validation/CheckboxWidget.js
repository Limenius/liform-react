import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FieldValidation } from "../../../fieldValidation";


const renderInput = field => {
  const className = classNames([
    "form-group",
    { "has-error": field.meta.touched && field.meta.error }
  ]);
  return (
    <div className={className}>
      <div className="checkbox">
        <label>
          <input
            {...field.input}
            type="checkbox"
            required={field.required}
            id={"field-" + field.name}
          />{" "}
          {field.label}
        </label>
      </div>
      {field.meta.touched &&
        field.meta.error && (
          <span className="help-block">{field.meta.error}</span>
        )}
      {field.description && (
        <span className="help-block">{field.description}</span>
      )}
    </div>
  );
};

const CheckboxWidget = props => {
  return (
    <FieldValidation
      component={renderInput}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
      schema={props.schema}
    />
  );
};

CheckboxWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object
};

export default CheckboxWidget;
