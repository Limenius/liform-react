import React from 'react'
import BaseInputWidget from './BaseInputWidget'

const DateTimeWidget = (props) => {
    return (
        <BaseInputWidget type="datetime-local" {...props} />
    )
}

DateTimeWidget.propTypes = {
    schema: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired,
    required: React.PropTypes.bool,
    fieldName: React.PropTypes.string,
    label: React.PropTypes.string,
}

export default DateTimeWidget
