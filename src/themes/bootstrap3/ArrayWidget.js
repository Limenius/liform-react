import React, { Component, PropTypes } from 'react';
import renderFields from '../../renderFields';
import classNames from 'classnames';
import { Field, FieldArray } from 'redux-form';

const renderInput = field => {
    var className = classNames([
        'form-group',
        {'has-error' : field.meta.touched && field.meta.error}
    ]);
    return (
        <div className={className}>
            { renderFields(field.schema.items, field.theme, field.name + '.0.') }
        </div>
    );
}


const ArrayWidget = props =>  {
    console.log(props.fieldName);
    return (
        <FieldArray
            component={renderInput}
            label={props.label}
            name={props.fieldName}
            schema={props.schema}
            theme={props.theme}
        />
    );
}

ArrayWidget.propTypes = { schema: React.PropTypes.object.isRequired };

export default ArrayWidget;
