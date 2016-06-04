import React, {Component, PropTypes} from 'react';

class StringWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="form-group">
                <label htmlFor={'field-'+this.props.fieldName}>{this.props.fieldName}</label>
                <textarea className="form-control" id={'field-'+this.props.fieldName}/>
            </div>
        );
    }
}

//StringWidget.propTypes = { schema: PropTypes.object.isRequired };

export default StringWidget;
