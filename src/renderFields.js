import React from 'react';
import _ from 'lodash';

const isRequired =
    (schema, fieldName) =>
    {
        if (!schema.required) {
            return false;
        }
        return (schema.required.indexOf(fieldName) != 1);
    }

const renderFields =
    (schema, theme, prefix = '') =>
    {
        const formFields = Object.keys(schema.properties);
        return _.map(schema.properties, (fieldSchema, fieldName) => {
            var widget = fieldSchema.format || fieldSchema.type;
            console.log(widget);
            if (!theme[widget]) {
                throw new Error('liform: ' + widget + ' is not defined in the theme');
            }
            return React.createElement(theme[widget], {
                key: fieldName,
                fieldName: prefix + fieldName,
                label: fieldSchema.title || fieldName,
                required: isRequired(schema, fieldName),
                schema: fieldSchema,
                theme: theme,
                field: formFields[fieldName]
            });
        });
    };

export default renderFields;
