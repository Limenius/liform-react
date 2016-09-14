import React, { Component, PropTypes } from 'react';
import renderFields from '../../renderFields';
import renderField from '../../renderField';
import classNames from 'classnames';
import { Field, FieldArray } from 'redux-form';
import _ from 'lodash';

const renderArrayFields = (count, schema, theme, fieldName) => {
    const prefix = fieldName + '.';
    if (count) {
        return _.times(count, (idx) => {

            return renderField(schema, idx.toString(), theme, prefix) ;
        });
    } else {
        return renderField(schema, '0', theme, prefix);
    }
}

const renderInput = field => {
    return (
        <div className="arrayType form-group">
            <legend className="control-label" >{field.label}</legend>
            { renderArrayFields(field.fields.length, field.schema.items, field.theme, field.name) }
            <button type="button" className="btn btn-primary" onClick={() => field.fields.push({})}>Add Member</button>
        </div>
    );
}

const ArrayWidget = props =>  {
    return (
        <FieldArray
            component={renderInput}
            label={props.label}
            name={props.fieldName}
            schema={props.schema}
            theme={props.theme}
        />
    )
}

ArrayWidget.propTypes = { schema: React.PropTypes.object.isRequired };

export default ArrayWidget;
