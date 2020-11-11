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

const inputFormatLength = "YYYY-MM-DDTHH:mm:ss".length; 

const pad = (n) => {
  return n < 10 ? '0' + n : n;
}

const timeZoneOffset = () =>{
  const now = new Date();
  const tz = now.getTimezoneOffset();
  const sign = tz > 0 ? "-" : "+";
  const hours = pad(Math.floor(Math.abs(tz) / 60));
  const minutes = pad(Math.abs(tz) % 60);

  return `${sign}${hours}:${minutes}`;
}

const toDateTimeFormat = (datetime) => {
  //only change when fully entered
  if(datetime.length < inputFormatLength){
    return datetime;
  }
  return `${datetime}${timeZoneOffset()}`;
}


const toInputFormat = (datetime) => {
  if (!datetime) {
    return "";
  }
  //
  if (datetime.length > inputFormatLength) {
    return datetime.substring(0, inputFormatLength);
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
