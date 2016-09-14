import React from 'react';
import _ from 'lodash';
import renderField from './renderField';

const renderFields =
    (schema, theme, prefix = '') =>
    {
        const formFields = Object.keys(schema.properties);
        return _.map(schema.properties, (field, name) =>  renderField(field, prefix + name, theme));
    };

export default renderFields;
