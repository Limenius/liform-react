import React, { Component, PropTypes } from 'react';
import renderFields from '../../renderFields';
import renderField from '../../renderField';
import classNames from 'classnames';
import { Field, FieldArray } from 'redux-form';
import { connect } from 'react-redux'


const renderArrayFields = (values, items, theme, fieldName) => {
    const prefix = fieldName + '.';
    if (values && values[fieldName]) {
        return values[fieldName].map((fieldValue, idx) => {
            return renderField(items, idx, theme, prefix) ;
        });
    } else {
        return renderField(items, 0, theme, prefix);
    }
}

const renderInput = field => {
    var className = classNames([
        'form-group',
        {'has-error' : field.meta.touched && field.meta.error}
    ]);
    return (
        <div className={className}>
            <label className="control-label" >{field.label}</label>
            { renderArrayFields(field.values, field.schema.items, field.theme, field.name) }
        </div>
    );
}

const ArrayWidget = props =>  {
    const baseArray = props => {
        return (
            <FieldArray
                component={renderInput}
                label={props.label}
                name={props.fieldName}
                schema={props.schema}
                theme={props.theme}
                values={props.values}
            />
        )
    };
    return (
            <FieldArray
                component={renderInput}
                label={props.label}
                name={props.fieldName}
                schema={props.schema}
                theme={props.theme}
                values={props.values}
            />);
    const mapStateToProps = (state) => ( {
        values : state.form.form.values
    });

    const ToRet = connect(mapStateToProps)(baseArray);
    return <ToRet
                label={props.label}
                fieldName={props.fieldName}
                schema={props.schema}
                theme={props.theme}
            />;
}

ArrayWidget.propTypes = { schema: React.PropTypes.object.isRequired };

export default ArrayWidget;
