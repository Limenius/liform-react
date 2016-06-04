import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import DefaultTheme from './themes/bootstrap3';
import {reduxForm} from 'redux-form';

class Liform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {theme: props.theme || DefaultTheme}
    }

    getFields() {
        return _.keys(this.props.schema.properties);
    }

    renderFields(formFields) {
        return _.map(this.props.schema.properties, (schema, fieldName) => {
            var widget = schema.format || schema.type;
            if (!this.state.theme[widget]) {
                throw new Error('liform: ' + widget + ' is not defined in the theme');
            }
            return React.createElement(this.state.theme[widget], {key: fieldName, fieldName: fieldName, schema, field: formFields[fieldName]});
        });
    }

    render() {
        class BaseForm extends React.Component {
            constructor(props) {
                super(props);
            }
            render() {
                return (
                    <form onSubmit={this.props.handleSubmit}>
                        {this.props.renderFields(this.props.fields)}
                        <button type="submit">Submit
                        </button>
                    </form>);
            }

        };
        //        return (<form onSubmit={this.props.handleSubmit}>
        //                {this.renderFields()}
        //            </form>);
        var FinalForm = reduxForm({
            form: this.props.schema.title || 'form',
            fields: this.getFields(),
        })(BaseForm);
        return (<FinalForm renderFields={this.renderFields.bind(this)} onSubmit={this.props.handleSubmit}/>);
    }
}

Liform.propTypes = {
    schema: PropTypes.object.isRequired,
    //    handleSubmit: PropTypes.func.isRequired,
}

export default Liform;
