import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Liform from '../'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { shallow, mount, render } from 'enzyme'

const makeStore = (initial) => createStore(
    combineReducers({ form: formReducer })
)


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

        const store = makeStore({})
        const Component = (
            <Provider store={store}>
                <Liform schema={schema} />
            </Provider>
        )
        const wrapper = render(Component)
        //console.log(render( Component).html());
        expect(wrapper.find('form').length).toEqual(1);

    })

})
