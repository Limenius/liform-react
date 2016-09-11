import React, {Component, PropTypes} from 'react';
import DefaultTheme from './themes/bootstrap3';
import {reduxForm, Field} from 'redux-form';
import renderFields from './renderFields';
import StringWidget from './themes/bootstrap3/StringWidget'
import buildSyncValidation from './buildSyncValidation';

const renderInput = field => {
    return (
            <input type="text" className="form-control"/>
    );
}

const BaseForm = props => {
    const {schema, handleSubmit, theme} = props;
    return (
        <form onSubmit={handleSubmit}>
            {renderFields(schema, theme || DefaultTheme)}
            <button type="submit">Submit</button>
        </form>);
}

const Liform = (props) => {
    const FinalForm = reduxForm({
        form: props.schema.title || 'form',
        validate: buildSyncValidation(props.schema),
    })(BaseForm);
    return (
        <FinalForm renderFields={renderFields.bind(this)} {...props}/>
    )
}

Liform.propTypes = {
    schema: React.PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
}

export default Liform;

export { renderFields };
