import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

class Liform extends React.Component {
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
            <div>
                {this.renderFields()}
            </div>
        );
    }
}

Liform.propTypes = { schema: PropTypes.object.isRequired };

export default Liform;
