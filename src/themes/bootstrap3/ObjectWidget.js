import React from 'react'
import renderFields from '../../renderFields'

const Widget = props =>  {
    return (
        <div>
        {props.label && <legend>{props.label}</legend>}
        {renderFields(props.schema, props.theme, props.fieldName && props.fieldName + '.')}
        </div>
    )
}

Widget.propTypes = {
    schema: React.PropTypes.object.isRequired,
    fieldName: React.PropTypes.string,
    label: React.PropTypes.string,
    theme: React.PropTypes.object,
}

export default Widget
