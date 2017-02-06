import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Liform from '../'


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
        const shallowRenderer = TestUtils.createRenderer()
        //let li = React.createElement(Liform, { schema: schema })
        shallowRenderer.render(React.createElement(Liform, { schema: schema }))

        const component = shallowRenderer.getRenderOutput()
        expect(component.type).toBeA('function')
    })

})
