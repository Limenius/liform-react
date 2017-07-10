import React from 'react'
import deepmerge from 'deepmerge'

const guessWidget = (fieldSchema) => {
    if (fieldSchema.widget) {
        return fieldSchema.widget
    }
    else if (fieldSchema.hasOwnProperty('enum')) {
        return 'choice'
    }
    else if(fieldSchema.hasOwnProperty('oneOf')) {
        return 'oneOf'
    }
    return fieldSchema.type || 'object'
}

const renderField = (fieldSchema, fieldName, theme, prefix = '', context = {}, required = false) => {
    if(fieldSchema.hasOwnProperty('allOf')) {
        fieldSchema = { ...fieldSchema, ...deepmerge.all(fieldSchema.allOf) }
        delete fieldSchema.allOf
    }
    
    const widget = guessWidget(fieldSchema)

    if (!theme[widget]) {
        throw new Error('liform: ' + widget + ' is not defined in the theme')
    }

    const newFieldName = prefix ? prefix + fieldName : fieldName

    return React.createElement(theme[widget], {
        key: fieldName,
        fieldName: widget == 'oneOf'? fieldName: newFieldName,
        label: fieldSchema.showLabel === false ? '' : fieldSchema.title || fieldName,
        required: required,
        schema: fieldSchema,
        theme,
        context,
        prefix
    })
}

export default renderField
