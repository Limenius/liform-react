import { Field, FieldArray } from "redux-form";
import React, { Component } from "react";
import Ajv from "ajv";

export class FieldValidation extends Component {
    ajv;
    constructor() {
        super();
        this.validate = this.validate.bind(this);
        this.ajv = new Ajv({
            errorDataPath: "property",
            allErrors: true,
            jsonPointers: false
        });
    }

    validate(value) {
        if(!value){
            return undefined;
        }
        const valid = this.ajv.validate(this.props.schema, value);
        if (valid) {
            return undefined;
        } else {
            return this.ajv.errorsText(this.ajv.errors);
        }

    }
    render() {
        return (
            <Field
                {...this.props}
                validate={this.validate}
            >
                {this.props.children}
            </Field>
        )
    }
}

export class FieldArrayValidation extends Component {
    ajv;
    constructor() {
        super();
        this.validate = this.validate.bind(this);
        this.ajv = new Ajv({
            errorDataPath: "property",
            allErrors: true,
            jsonPointers: false
        });
    }

    validate(value) {
        const schema = { ...this.props.schema };
        // we want to validate only the array here and not the inner fields
        delete schema.items;
        const valid = this.ajv.validate(schema, value);
        if (valid) {
            return undefined;
        } else {
            return this.ajv.errorsText(this.ajv.errors);
        }

    }
    render() {
        return (
            <FieldArray
                {...this.props}
                validate={this.validate}
            >
                {this.props.children}
            </FieldArray>
        )
    }
}


