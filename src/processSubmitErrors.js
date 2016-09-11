import React from 'react';
import _ from 'lodash';
import { SubmissionError } from 'redux-form';

const processSubmitErrors = response => {
    let errors = {};
    if (response.hasOwnProperty('errors')) {
        _.forIn(response.errors.children, (value, field) => {
            if (value.hasOwnProperty('errors'))  {
                errors[field] = value.errors[0];
            }
        });
        throw new SubmissionError(errors);

    }
    return {};
}

export default processSubmitErrors;
