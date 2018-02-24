const {expect} = require('chai')
const {frame, frameList, game} = require('../')

describe('Frame Scoring', () => {
    describe('normal frame', () => {
        it('should get sum of each roll as frame score', () => {
            expect(frame([[5, 3]])).to.equal(8)
        })
    })

    describe('strike', () => {
        it('should consider next frame if next frame is not strike', () => {
            expect(frame([[10], [5, 3]])).to.equal(18)
        })

        it('should consider next two frames if next frame is strike', () => {
            expect(frame([[10], [10], [5, 1]])).to.equal(25)
        })
    })

    describe('spare', () => {
        it('should consider next frame', () => {
            expect(frame([[5, 5], [5, 3]])).to.equal(15)
        })
    })
})

describe('Frame List', () => {
    it('should score each frame', () => {
        expect(frameList([[10], [10], [10], [5, 5], [6, 1]])).to.deep.equal(
            [30, 25, 20, 16, 7]
        )
    })
})

describe('Game Scoring', () => {
    it('should score game', () => {
        expect(game([[10], [10], [10], [5, 5], [6, 1]])).to.deep.equal(
            [30, 55, 75, 91, 98]
        )
    })
})