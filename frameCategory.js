const {flow, head, sum, isEqual, overEvery, negate, overSome} = require('lodash/fp')

const FRAME_FULL_SCORE = 10

const isStrike = flow(head, isEqual(FRAME_FULL_SCORE))

const isSpare = overEvery([
    negate(isStrike),
    flow(sum, isEqual(FRAME_FULL_SCORE))
])

const isNormal = negate(overSome([isStrike, isSpare]))

module.exports = {isStrike, isSpare, isNormal}