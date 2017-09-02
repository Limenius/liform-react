import React from 'react'
import deepmerge from 'deepmerge'

const guessWidget = (fieldSchema, theme) => {
    if (fieldSchema.widget) {
        return fieldSchema.widget
    }
    else if (fieldSchema.hasOwnProperty('enum')) {
        return 'choice'
    }
    else if(fieldSchema.hasOwnProperty('oneOf')) {
        return 'oneOf'
    }else if(theme[fieldSchema.format]) {
        return fieldSchema.format
    }
    return fieldSchema.type || 'object'
}

const renderField = (fieldSchema, fieldName, theme, prefix = '', context = {}, required = false) => {
    if(fieldSchema.hasOwnProperty('allOf')) {
        fieldSchema = { ...fieldSchema, ...deepmerge.all(fieldSchema.allOf) }
        delete fieldSchema.allOf
    }

    const widget = guessWidget(fieldSchema, theme)

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
