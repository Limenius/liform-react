import React from 'react'
import PropTypes from 'prop-types'
import renderFields from '../../renderFields'

const Widget = props =>  {
    return (
        props.label ?
        <div className="panel panel-default">
            {props.label && <div className="panel-heading" style={{fontSize:12, fontWeight: "bold"}}>{props.label}</div>}
            <div className="panel-body">{renderFields(props.schema, props.theme, props.fieldName && props.fieldName + '.', props.context)}</div>
        </div> :
        <div>
            {renderFields(props.schema, props.theme, props.fieldName && props.fieldName + '.', props.context)}
        </div>
    )
}

Widget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.object,
    context: PropTypes.object,
}

export default Widget
