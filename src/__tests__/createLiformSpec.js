import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Liform from '../'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { shallow, mount, render } from 'enzyme'
import { FormFrame } from './test-utils'



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

    //it('can pass a context', () => {
    //    const store = makeStore({})
    //    const Component = (
    //        <Provider store={store}>
    //            <Liform schema={schema} context={{}}/>
    //        </Provider>
    //    )
    //    const wrapper = render(Component)
    //})

})
