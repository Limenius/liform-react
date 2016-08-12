import expect, {createSpy} from 'expect';
import React, {Component, PropTypes} from 'react';
import TestUtils from 'react-addons-test-utils';
import renderFields from '../renderFields';
import DefaultTheme from '../themes/bootstrap3';


describe('renderFields', () => {
    const schema = {
        title: 'A schema',
        properties: {
            'name' : {
                type: 'string',
                title: 'A name',
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

    it('raises exception if type is not defined', () => {
        expect(function () {
            renderFields(['name'], schemaWrong, DefaultTheme);

        }).toThrow(/liform:/);
    });

    it('creates element with a label', () => {
        var elems = renderFields(['name'], schema, DefaultTheme);
        expect(elems[0].props).toIncludeKey('label');

    });
});
