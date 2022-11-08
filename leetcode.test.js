
import {addTwoNumbers} from './addTwoNumbers'

const inputs = [
   [((2,3),(4,5)), (8,6)]
]

test.each(inputs)('return the list with duplicates removed', ([l1],[l2], expected) => {
    const result = addTwoNumbers([l1],[l2]);
    expect(result).toBe(expected)
});