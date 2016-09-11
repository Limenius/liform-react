import React from 'react';
import _ from 'lodash';
import { SubmissionError } from 'redux-form';

const processSubmitErrors = response => {
    throw new SubmissionError({ name: 'User does not exist', _error: 'Login failed!' })
    return {};
}

export default processSubmitErrors;
