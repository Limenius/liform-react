import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Field } from "redux-form";

const renderInput = field => {
  const className = classNames([
    "form-group",
    { "has-error": field.meta.touched && field.meta.error }
  ]);
  return (
    <div className={className}>
      <label className="control-label" htmlFor={field.id}>
        {field.label}
      </label>
      <input
        {...field.input}
        type="datetime-local"
        step="1"
        required={field.required}
        className="form-control"
        placeholder={field.placeholder}
      />
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


const toDateTimeFormat = (datetime) => {
  return `${datetime}Z`;
}
const toInputFormat = (datetime) => {
  if (!datetime) {
    return "";
  }
  if (datetime.endsWith("Z")) {
    return datetime.substring(0, datetime.length - 1);
  }
  return datetime;
}
const DateTimeWidget = props => {
  return (
    <Field
      component={renderInput}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
      normalize={toDateTimeFormat}
      format={toInputFormat}
    />
  );
};

DateTimeWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  required: PropTypes.bool,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  normalizer: PropTypes.func
};

export default DateTimeWidget;
