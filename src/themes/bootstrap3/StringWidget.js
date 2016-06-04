import React, {Component, PropTypes} from 'react';

class StringWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    renderFields() {
        return _.map(this.props.schema.properties, (schema, fieldName) => {
            return (<div key={fieldName} schema={schema} >{fieldName}</div>);
        });
    }

    render() {
        return (
            <div class="form-group">
                <label htmlFor="field-{props.name}">{props.name}</label>
                <input type="text" class="form-control" id="field-{{props.name}}"/>
            </div>
        );
    }
}

//StringWidget.propTypes = { schema: PropTypes.object.isRequired };

export default StringWidget;
