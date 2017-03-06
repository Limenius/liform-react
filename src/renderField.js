import React from 'react'

const guessWidget = (fieldSchema) => {
    if (fieldSchema.widget) {
        return fieldSchema.widget
    }
    else if (fieldSchema.hasOwnProperty('enum')) {
        return 'choice'
    }
    return fieldSchema.type || 'object'
}

const renderField = (fieldSchema, fieldName, theme, prefix = '', context = {}, required = false) => {
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
        theme,
        context,
    })
}

export default renderField
