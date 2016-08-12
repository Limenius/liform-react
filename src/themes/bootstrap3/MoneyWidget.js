import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class MoneyWidget extends React.Component {
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
            <div className="form-group">
                <label className="control-label" htmlFor={'field-'+this.props.fieldName}>{this.props.label}</label>
                <div className="input-group">
                    <span className="input-group-addon">€ </span>
                    <input type="text" className="form-control" id={'field-'+this.props.fieldName} {...this.props.field}/>
                </div>
                {field.touched && field.error && <span className="help-block">{field.error}</span>}
            </div>
        );
    }
}

MoneyWidget.propTypes = {
    schema: PropTypes.object
};

export default MoneyWidget;
