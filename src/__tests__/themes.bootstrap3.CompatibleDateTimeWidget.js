import expect from 'expect'
import { extractDateTimeToken } from '../themes/bootstrap3/CompatibleDateTimeWidget.js'
import React from 'react'
import Liform from '../'
import { FormFrame } from './test-utils'
import { shallow, mount, render } from 'enzyme'

describe('CompatibleDateTimeWidget', () => {
    it('on null extracted value is empty', () => {
        expect(extractDateTimeToken(null)).toBe('')
    })
    it('on invalid format extracted value is empty', () => {
        expect(extractDateTimeToken('lala-land')).toBe('')
    })
    it('can extract month', () => {
        expect(extractDateTimeToken('1967-04-03T23:04:16', 1)).toBe('04')
    })

    it('should render a form', () => {
        const schema = {
            title: 'A schema',
            properties: {
                'date' : {
                    type: 'string',
                    widget: 'compatible-datetime',
                }
            }
        }


        const Component = (
            <FormFrame>
                <Liform schema={schema} />
            </FormFrame>
        )
        const wrapper = render(Component)

        expect(wrapper.find('form').length).toEqual(1);
        expect(wrapper.find('select').length).toEqual(6);

    })

})
