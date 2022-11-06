
import { isValid } from './validParentheses';

const inputs = [
    ["()", true],
    ["()[]{}", true],
    ["(]", false],
    ["({})", true]
]

test.each(inputs)('returns if the input string is valid', (str,expected) => {
    const result = isValid(str);
    expect(result).toBe(expected)
});