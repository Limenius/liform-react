import React, {Component, PropTypes} from 'react';

class StringWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={'field-'+this.props.fieldName}>{this.props.fieldName}</label>
                <input type="text" className="form-control" id={'field-'+this.props.fieldName} {...this.props.field}/>
            </div>
        );
    }
}

//StringWidget.propTypes = { schema: PropTypes.object.isRequired };

export default StringWidget;
