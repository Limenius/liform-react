import expect from 'expect'
import React from 'react'
import Liform from '../'
import { FormFrame } from './test-utils'
import { shallow, mount, render } from 'enzyme'

describe('DateWidget', () => {
    it('should render a form with a type date widget', () => {
        const schema = {
            title: 'A schema',
            properties: {
                'field': {
                    'type': 'string',
                    'widget': 'date',
                },
            }
        }


        const Component = (
            <FormFrame>
                <Liform schema={schema} />
            </FormFrame>
        )

        const wrapper = render(Component)
        expect(wrapper.find('input[type=date]').length).toEqual(1);

    })

    it('required gives the input the required attribute', () => {
        const schema = {
            title: 'A schema',
            properties: {
                'field': {
                    'type': 'string',
                    'widget': 'date',
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
