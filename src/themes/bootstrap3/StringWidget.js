import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {Field} from 'redux-form';

const renderInput = field => {
    var className = classNames([
        'form-group',
        {'has-error' : field.meta.touched && field.meta.error}
    ]);
    return (
        <div className={className}>
            <label className="control-label" htmlFor={'field-'+field.name}>{field.label}</label>
            <input type="text" className="form-control"/>
            {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
            {field.description && <span className="help-block">{field.description}</span>}
        </div>
    );
}


class StringWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var field = this.props.field;
        return (
                <Field
                    component={renderInput}
                    label={this.props.label}
                    name={this.props.fieldName}
                    required={this.props.required}
                    id={'field-'+this.props.fieldName}
                    placeholder={this.props.schema.default}
                    description={this.props.schema.description}
                />
        );
    }
}

StringWidget.propTypes = { schema: React.PropTypes.object.isRequired };

export default StringWidget;
