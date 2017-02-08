import React from 'react'
import BaseInputWidget from './BaseInputWidget'

const ColorWidget = (props) => {
    return (
        <BaseInputWidget type="color" {...props} />
    )
}

BaseInputWidget.propTypes = {
    schema: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired,
    required: React.PropTypes.bool,
    fieldName: React.PropTypes.string,
    label: React.PropTypes.string,
}

export default ColorWidget
