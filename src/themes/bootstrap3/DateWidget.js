import React from 'react'
import BaseInputWidget from './BaseInputWidget'

const DateWidget = (props) => {
    return (
        <BaseInputWidget type="date" {...props} />
    )
}

DateWidget.propTypes = {
    schema: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired,
    required: React.PropTypes.bool,
    fieldName: React.PropTypes.string,
    label: React.PropTypes.string,
}

export default DateWidget
