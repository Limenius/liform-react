import React from 'react'
import BaseInputWidget from './BaseInputWidget'

const EmailWidget = (props) => {
    return (
        <BaseInputWidget type="email" {...props} />
    )
}

EmailWidget.propTypes = {
    schema: React.PropTypes.object.isRequired,
    fieldName: React.PropTypes.string,
    label: React.PropTypes.string,
    theme: React.PropTypes.object,
    multiple: React.PropTypes.bool,
    required: React.PropTypes.bool,
}

export default EmailWidget
