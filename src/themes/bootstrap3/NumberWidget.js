import React, {Component, PropTypes} from 'react';

class NumberWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={'field-'+this.props.fieldName}>{this.props.fieldName}</label>
                <input type="number" className="form-control" id={'field-'+this.props.fieldName} {...this.props.field}/>
            </div>
        );
    }
}

NumberWidget.propTypes = { schema: PropTypes.object.isRequired };

export default NumberWidget;
