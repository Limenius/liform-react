import React from 'react';
import _ from 'lodash';

const buildValidators =
    schema => {
        var validators = [];
        validators.push(
            (values, errors) => {
                if (!/aaa/i.test(values.name)) {
                    errors.name = 'Invalid pattern'
                }
            }
        );
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

