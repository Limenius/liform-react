import expect, {createSpy} from 'expect';
import processSubmitErrors from '../processSubmitErrors';
import { SubmissionError } from 'redux-form';

describe('processSubmitErrors', () => {
    const response = {
        "code":null,
        "message":"Validation Failed",
        "errors":
            {
                "children":
                {"name":
                    {"errors":
                        ["This value should not be equal to \"Mary\"."]
                    },
                    "color":[]
                }
            }
    };

    it('raises exception if there is an error', () => {
        expect(function () {
            processSubmitErrors(response);
        }).toThrow(SubmissionError);
    });

});
