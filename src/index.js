import React, {Component, PropTypes} from 'react';
import DefaultTheme from './themes/bootstrap3';
import {reduxForm, Field} from 'redux-form';
import renderFields from './renderFields';
import renderField from './renderField';
import processSubmitErrors from './processSubmitErrors';
import StringWidget from './themes/bootstrap3/StringWidget'
import buildSyncValidation from './buildSyncValidation';

const renderInput = field => {
    return (
            <input type="text" className="form-control"/>
    );
}

const BaseForm = props => {
    const {schema, handleSubmit, theme, error, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            {renderField(schema, schema.title, theme || DefaultTheme)}
            <div>
            {error && <strong>{error}</strong>}
            </div>
            <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
        </form>);
}

const Liform = (props) => {
    const FinalForm = reduxForm({
        form: props.schema.title || 'form',
        validate: buildSyncValidation(props.schema),
    })(BaseForm);
    return (
        <FinalForm renderFields={renderField.bind(this)} {...props}/>
    )
}

Liform.propTypes = {
    schema: React.PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
}

export default Liform;

export { renderFields, renderField, processSubmitErrors };
