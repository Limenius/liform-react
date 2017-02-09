import React, { PropTypes } from 'react'
import DefaultTheme from './themes/bootstrap3'
import { reduxForm } from 'redux-form'
import renderFields from './renderFields'
import renderField from './renderField'
import processSubmitErrors from './processSubmitErrors'
import buildSyncValidation from './buildSyncValidation'

const BaseForm = props => {
    const { schema, handleSubmit, theme, error, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            {renderField(schema, null, theme || DefaultTheme)}
            <div>
                {error && <strong>{error}</strong>}
            </div>
            <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
        </form>)
}

const Liform = (props) => {
    props.schema.showLabel = false
    const FinalForm = reduxForm({
        form: props.formKey || props.schema.title || 'form',
        validate: props.syncValidation || buildSyncValidation(props.schema),
        initialValues: props.initialValues,
    })(props.baseForm || BaseForm)
    return (
        <FinalForm renderFields={renderField.bind(this)} {...props}/>
    )
}

Liform.propTypes = {
    schema: PropTypes.object,
    onSubmit: PropTypes.func,
    initialValues: PropTypes.object,
    syncValidation: PropTypes.func,
    formKey: PropTypes.string,
    baseForm: PropTypes.func,
}

export default Liform

export { renderFields, renderField, processSubmitErrors, DefaultTheme }
