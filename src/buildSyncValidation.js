import React from 'react';
import _ from 'lodash';

const buildValidators =
    schema => {
        var validators = [];

        _.forEach(schema.properties, (spec, fieldName) => {
            if (spec.pattern) {
                validators.push(
                    (values, errors) => {
                        var re = new RegExp(spec.pattern);
                        if (!re.test(values[fieldName])) {
                            errors[fieldName] = 'Invalid pattern'
                        }
                    }
                );
            }
            if (spec.maxLength) {
                validators.push(
                    (values, errors) => {
                        if (values[fieldName].length > spec.maxLength) {
                            errors[fieldName] = 'Value too long'
                        }
                    }
                );
            }
            if (spec.minLength) {
                validators.push(
                    (values, errors) => {
                        if (values[fieldName].length < spec.minLength) {
                            errors[fieldName] = 'Value too short'
                        }
                    }
                );
            }
        });

        return validators;
    }

const buildSyncValidation =
    schema =>
    {
        var validators = buildValidators(schema);
        return values => {
            const errors = {};
            _.forEach(validators, (validator) => {
                validator(values, errors);
            });
            return errors
        };
    };

export default buildSyncValidation;

