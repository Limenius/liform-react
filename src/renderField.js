import React from 'react';

const isRequired = (schema, fieldName) => {
    if (!schema.required) {
        return false;
    }
    return (schema.required.indexOf(fieldName) != 1);
};

const renderField = (fieldSchema, fieldName, theme, prefix = '') => {
    var widget = fieldSchema.format || fieldSchema.type;
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
    });
};

export default renderField;
