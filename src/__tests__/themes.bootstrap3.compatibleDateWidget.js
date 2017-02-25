import expect from 'expect'
import { extractDateToken } from '../themes/bootstrap3/CompatibleDateWidget.js'

describe('CompatibleDateWidget', () => {
    it('on null extracted value is empty', () => {
        expect(extractDateToken(null)).toBe('')
    })
    it('on invalid format extracted value is empty', () => {
        expect(extractDateToken('lala-land')).toBe('')
    })
    it('can extract month', () => {
        expect(extractDateToken('1967-04-03', 1)).toBe(4)
        expect(extractDateToken('1967-04-03', 1)).toBeA('number')
    })

})
