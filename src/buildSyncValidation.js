const getPatternValidation =
    (spec, fieldName) => {
        if (spec.pattern) {
            return (values, errors) => {
                const re = new RegExp(spec.pattern)
                if (!re.test(values[fieldName])) {
                    errors[fieldName] = 'Invalid pattern'
                }
            }
        }
    }

const getMaxLengthValidation =
    (spec, fieldName) => {
        if (spec.maxLength) {
            return (values, errors) => {
                if (values[fieldName].length > spec.maxLength) {
                    errors[fieldName] = 'Value too long'
                }
            }
        }
    }

const getMinLengthValidation =
    (spec, fieldName) => {
        if (spec.minLength) {
            return (values, errors) => {
                if (values[fieldName].length < spec.minLength) {
                    errors[fieldName] = 'Value too short'
                }
            }
        }
    }

const getMultipleOf =
    (spec, fieldName) => {
        if (spec.multipleOf) {
            return (values, errors) => {
                if (values[fieldName] % spec.multipleOf) {
                    errors[fieldName] = 'Value must be multiple of '+spec.multipleOf
                }
            }
        }
    }

const getRequired =
    (required, fieldName) => {
        if (required.indexOf(fieldName) != -1) {
            return (values, errors) => {
                if (!values[fieldName]) {
                    errors[fieldName] = 'Required'
                }
            }
        }
    }

const validationBuilders = [ getPatternValidation, getMaxLengthValidation, getMinLengthValidation, getMultipleOf ]

const buildValidators =
    schema => {
        let validators = []

        let rule
        for (let fieldName in schema.properties) {
            const spec = schema.properties[fieldName]
            validationBuilders.forEach((possibleRule) => {
                rule = possibleRule(spec, fieldName)
                rule && validators.push(rule)
            })

            // Required is a special case because it is defined for the compoound
            if (schema.required) {
                rule = getRequired(schema.required, fieldName)
                rule && validators.push(rule)
            }
        }

        return validators
    }

const buildSyncValidation =
    schema =>
    {
        let validators = buildValidators(schema)
        return values => {
            const errors = {}
            for (let validator of validators) {
                validator(values, errors)
            }
            return errors
        }
    }

export default buildSyncValidation
