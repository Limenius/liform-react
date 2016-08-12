import React from 'react';
import _ from 'lodash';

const renderFields =
    (formFields, schema, theme) =>
    {
        return _.map(schema.properties, (schema, fieldName) => {
            var widget = schema.format || schema.type;
            if (!theme[widget]) {
                throw new Error('liform: ' + widget + ' is not defined in the theme');
            }
            return React.createElement(theme[widget], {
                key: fieldName,
                fieldName: fieldName,
                label: schema.title || fieldName,
                schema,
                field: formFields[fieldName]
            });
        });
    };

export default renderFields;
