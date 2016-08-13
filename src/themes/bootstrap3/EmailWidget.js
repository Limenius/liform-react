import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class EmailWidget extends React.Component {
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
                <input type="email" className="form-control" id={'field-'+this.props.fieldName} {...this.props.field} required={this.props.required} placeholder={this.props.schema.default}/>
                {this.props.schema.description && <span className="help-block">{this.props.schema.description}</span>}
                {field.touched && field.error && <span className="help-block">{field.error}</span>}
            </div>
        );
    }
}

EmailWidget.propTypes = { schema: PropTypes.object.isRequired };

export default EmailWidget;
