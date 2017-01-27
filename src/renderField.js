import React from 'react'


const guessWidget = (fieldSchema) => {
    if (fieldSchema.hasOwnProperty('enum')) {
        return 'choice'
    }
    return fieldSchema.format || fieldSchema.type || 'object'
}

const renderField = (fieldSchema, fieldName, theme, prefix = '', required = false) => {
    const widget = guessWidget(fieldSchema)
    if (!theme[widget]) {
        throw new Error('liform: ' + widget + ' is not defined in the theme')
    }

    return React.createElement(theme[widget], {
        key: fieldName,
        fieldName: prefix ? prefix + fieldName : fieldName,
        label: fieldSchema.showLabel === false ? '' : fieldSchema.title || fieldName,
        required: required,
        schema: fieldSchema,
        theme: theme,
    })
}

export default renderField
