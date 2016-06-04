import React, {Component, PropTypes} from 'react';

class MoneyWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                    <label htmlFor={'field-'+this.props.fieldName}>{this.props.fieldName}</label>
                <div className="input-group">
                    <span className="input-group-addon">€ </span>
                <input type="text" className="form-control" id={'field-'+this.props.fieldName} {...this.props.field}/>
                </div>
            </div>
        );
    }
}

MoneyWidget.propTypes = { schema: PropTypes.object.isRequired };

export default MoneyWidget;
