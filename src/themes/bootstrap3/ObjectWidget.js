import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import renderFields from '../../renderFields';

const Widget = props =>  {
    return (
        <div>
        <label>{props.label}</label>
        {renderFields(props.schema, props.theme, props.fieldName + '.')}
        </div>
    );
}

Widget.propTypes = { schema: React.PropTypes.object.isRequired };

export default Widget;
