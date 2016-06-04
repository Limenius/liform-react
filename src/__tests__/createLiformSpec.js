import expect, {createSpy} from 'expect';
import React, {Component, PropTypes} from 'react';
import TestUtils from 'react-addons-test-utils';
import Liform from '../liform';


describe('createLiform', () => {
    const schema = {
        title: 'A schema',
        properties: {
            'name' : {
                type: 'string',
            }
        }
    };

    const schemaWrong = {
        title: 'A schema',
        properties: {
            'name' : {
                type: 'asdf',
            }
        }
    };

    it('should render a form', () => {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(React.createElement(Liform, {schema: schema}));

        const component = shallowRenderer.getRenderOutput();
        expect(component.type).toBe('div');
    });

    it('raises exception if type is not defined', () => {
        const shallowRenderer = TestUtils.createRenderer();
        expect(function () {
            throw new Error('boom!')
        }).toThrow(/boom/);
        expect(function () {
            shallowRenderer.render(React.createElement(Liform, {schema: schemaWrong}));
            shallowRenderer.getRenderOutput();
        }).toThrow(/liform:/);

    });
});
