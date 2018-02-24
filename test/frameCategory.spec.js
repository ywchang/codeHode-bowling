const {isNormal, isSpare, isStrike} = require('../frameCategory')
const {expect} = require('chai')

describe('Frame Category', () => {
    it('should be strike if first roll is full score', () => {
        expect(isStrike([10])).to.true
        expect(isSpare([10])).to.false
        expect(isNormal([10])).to.false
    })

    it('should be spare if two rolls are full score', () => {
        expect(isStrike([5, 5])).to.false
        expect(isSpare([5, 5])).to.true
        expect(isNormal([5, 5])).to.false
    })

    it('should be normal if two rolls are not full score', () => {
        expect(isStrike([1, 5])).to.false
        expect(isSpare([1, 5])).to.false
        expect(isNormal([1, 5])).to.true
    })
})