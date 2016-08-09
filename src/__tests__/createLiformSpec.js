import expect, {createSpy} from 'expect';
import React, {Component, PropTypes} from 'react';
import TestUtils from 'react-addons-test-utils';
import Liform from '../liform';
import renderFields from '../renderFields';
import DefaultTheme from '../themes/bootstrap3';


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
        var li = React.createElement(Liform, {schema: schema});
        shallowRenderer.render(React.createElement(Liform, {schema: schema}));

        const component = shallowRenderer.getRenderOutput();
        expect(component.type).toBeA('function');
    });

    it('raises exception if type is not defined', () => {
        expect(function () {
            renderFields(['name'], schemaWrong, DefaultTheme);

        }).toThrow(/liform:/);

    });
});
