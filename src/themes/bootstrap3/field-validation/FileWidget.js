import React from "react";
import classNames from "classnames";

import { FieldValidation } from "../../../fieldValidation";


const processFile = (onChange, e) => {
  const files = e.target.files;
  return new Promise(() => {
    let reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        onChange(reader.result);
      },
      false
    );
    reader.readAsDataURL(files[0]);
  });
};

const File = field => {
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
        name={field.name}
        onBlur={field.onBlur}
        onChange={processFile.bind(this, field.input.onChange)}
        required={field.required}
        className="form-control"
        type="file"
      />
      {field.meta.touched &&
        field.meta.error && (
          <span className="help-block">{field.meta.error}</span>
        )}
      {field.description && <span>{field.description}</span>}
    </div>
  );
};

const FileWidget = props => {
  return (
    <FieldValidation
      component={File}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
      type={props.type}
      schema={props.schema}
    />
  );
};

export default FileWidget;
