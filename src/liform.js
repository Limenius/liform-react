import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import DefaultTheme from './themes/bootstrap3';
import {reduxForm} from 'redux-form';
import renderFields from './renderFields';
import StringWidget from './themes/bootstrap3/StringWidget'
import buildSyncValidation from './buildSyncValidation';

class Liform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {theme: props.theme || DefaultTheme}
    }

    getFields() {
        return _.keys(this.props.schema.properties);
    }


    render() {
        var theme = this.state.theme;
        var schema = this.props.schema;
        class BaseForm extends React.Component {
            constructor(props) {
                super(props);
            }
            render() {
                return (
                <form onSubmit={this.props.handleSubmit}>
                    {renderFields(this.props.fields, schema, theme)}
                    <button type="submit">Submit</button>
                </form>);
            }
        }
        var FinalForm = reduxForm({
            form: this.props.schema.title || 'form',
            fields: this.getFields(this.props.schema),
            validate: buildSyncValidation(this.props.schema),
        })(BaseForm);
        return (<FinalForm renderFields={renderFields.bind(this)} {...this.props} onSubmit={this.props.handleSubmit}/>);
    }
}

Liform.propTypes = {
    schema: React.PropTypes.object,
    //    handleSubmit: PropTypes.func.isRequired,
}

export default Liform;

export { renderFields };
