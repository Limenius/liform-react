import React, {Component, PropTypes} from 'react';

class EmailWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={'field-'+this.props.fieldName}>{this.props.label}</label>
                <input type="email" className="form-control" id={'field-'+this.props.fieldName} {...this.props.field}/>
            </div>
        );
    }
}

EmailWidget.propTypes = { schema: PropTypes.object.isRequired };

export default EmailWidget;
