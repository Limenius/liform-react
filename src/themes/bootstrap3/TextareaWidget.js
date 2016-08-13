import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class StringWidget extends React.Component {
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
                <label className="control-label" htmlFor={'field-'+this.props.fieldName}>{this.props.label}</label>
                <textarea className="form-control" id={'field-'+this.props.fieldName} {...this.props.field} placeholder={this.props.schema.default} required={this.props.required}/>
                {field.touched && field.error && <span className="help-block">{field.error}</span>}
            </div>
        );
    }
}

//StringWidget.propTypes = { schema: PropTypes.object.isRequired };

export default StringWidget;
