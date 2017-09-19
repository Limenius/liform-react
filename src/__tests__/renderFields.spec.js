import expect from 'expect'
import renderFields from '../renderFields'
import DefaultTheme from '../themes/bootstrap3'


describe('renderFields', () => {
    const schema = {
        title: 'A schema',
        properties: {
            'name' : {
                type: 'string',
                title: 'A name',
            }
        }
    }

    const schemaWrong = {
        title: 'A schema',
        properties: {
            'name' : {
                type: 'asdf',
            }
        }
    }

    it('raises exception if type is not defined', () => {
        expect(function () {
            renderFields(schemaWrong, DefaultTheme)
        }).toThrow(/liform:/)
    })

    it('creates element with a label', () => {
        const elems = renderFields(schema, DefaultTheme)
        expect(elems[0].props).toIncludeKey('label')

    })
})
