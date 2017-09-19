import expect from 'expect'
import React from 'react'
import Liform from '../'
import { FormFrame } from './test-utils'
import { shallow, mount, render } from 'enzyme'

describe('CheckboxWidget', () => {
    it('should render a form with a checkbox', () => {
        const schema = {
            title: 'A schema',
            properties: {
                'field': {
                    'type': 'boolean',
                },
            }
        }


        const Component = (
            <FormFrame>
                <Liform schema={schema} />
            </FormFrame>
        )

        const wrapper = render(Component)
        expect(wrapper.find('input[type=checkbox]').length).toEqual(1);

    })
    it('required gives the input the required attribute', () => {
        const schema = {
            title: 'A schema',
            properties: {
                'field': {
                    'type': 'boolean',
                },
            },
            required: ['field']
        }


        const Component = (
            <FormFrame>
                <Liform schema={schema} />
            </FormFrame>
        )

        const wrapper = render(Component)

        expect(wrapper.find('input[required]').length).toEqual(1);

    })

})
