import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class NumberWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var field = this.props.field;
        var className = classNames([
            'form-group',
            {'has-error' : field.touched && field.error}
        ]);
        return (
            <div className={className}>
                <label htmlFor={'field-'+this.props.fieldName}>{this.props.label}</label>
                <input type="number" className="form-control" id={'field-'+this.props.fieldName} {...this.props.field} required={this.props.required} placeholder={this.props.schema.default}/>
                {field.touched && field.error && <span className="help-block">{field.error}</span>}
            </div>
        );
    }
}

NumberWidget.propTypes = { schema: PropTypes.object.isRequired };

export default NumberWidget;
