
import { deleteDuplicates } from './removeDuplicatesFromSortedList';

const inputs = [
    [[1,1,2,3], [1,2,3]],
    [[1,1,1,4,4,4,5,55,6,6], [1,4,5,55,6]],
    [[2,2,4,4,4,5], [2,4,5]]
]

test.each(inputs)('return the list with duplicates removed', (arr,expected) => {
    const result = deleteDuplicates(arr);
    expect(result).toBe(expected)
});