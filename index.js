const {flow, head, sum, cond, overSome, flatten, take, isEmpty, tail, reduce, add, last} = require('lodash/fp')
const {isStrike, isSpare, isNormal} = require('./frameCategory')

const frame = cond([
    [flow(head, overSome([isStrike, isSpare])), flow(flatten, take(3), sum)],
    [flow(head, isNormal), flow(head, sum)]])

const frameList = gamePins => isEmpty(gamePins) ? [] :
    [frame(gamePins), ...frameList(tail(gamePins))]

const game = flow(frameList, reduce(
    (left, right) => [...left, flow(last, add(right))(left)], []))

module.exports = {
    frame,
    frameList,
    game
}