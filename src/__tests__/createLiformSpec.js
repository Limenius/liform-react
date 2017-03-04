import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Liform, { DefaultTheme } from '../'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { shallow, mount, render } from 'enzyme'
import { FormFrame } from './test-utils'
import { Field } from 'redux-form'
import sinon from 'sinon'



describe('createLiform', () => {
    const schema = {
        title: 'A schema',
        properties: {
            'name' : {
                type: 'string',
            }
        }
    }


    //const schemaWrong = {
    //    title: 'A schema',
    //    properties: {
    //        'name' : {
    //            type: 'asdf',
    //        }
    //    }
    //}

    it('should render a form', () => {

        const Component = (
            <FormFrame>
                <Liform schema={schema} />
            </FormFrame>
        )
        const wrapper = render(Component)
        //console.log(render( Component).html());
        expect(wrapper.find('form').length).toEqual(1);

    })

    it('can pass a context', () => {
        const CustomString = field => {
            const { fun } = field.context
            fun()
            return (
                <input {...field.input} className="form-control" type="email"/>
            )
        }
        const CustomWidget = (props) => {
            return (
                <Field
                    component={CustomString}
                    name={props.fieldName}
                    context={props.context}
                />
            )
        }
        const myTheme = { ...DefaultTheme, 'string': CustomWidget }

        let fun = sinon.spy();

        const Component = (
            <FormFrame>
                <Liform schema={schema} context={{fun}} theme={myTheme}/>
            </FormFrame>
        )
        const wrapper = render(Component)
        sinon.assert.calledOnce(fun);
        expect(wrapper.find('form').length).toEqual(1);
    })

})
