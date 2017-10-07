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
    it('respects order of elements', () => {
        const schemaOrder = {
            title: 'A schema',
            properties: {
                'familyName' : {
                    type: 'string',
                    title: 'A surname',
                    propertyOrder: 2,
                },
                'name' : {
                    type: 'string',
                    title: 'A name',
                    propertyOrder: 1,
                },
                'another' : {
                    type: 'string',
                    title: 'Another',
                    propertyOrder: 3,
                },
            }
        }
        const elems = renderFields(schemaOrder, DefaultTheme)
        expect(elems[0].props.label).toBe('A name')
        expect(elems[1].props.label).toBe('A surname')
        expect(elems[2].props.label).toBe('Another')


    })
})
