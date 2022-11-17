/*

Given an array of positive integers arr, find a pattern of length m that is repeated k or more times.

A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping. A pattern is defined by its length and the number of repetitions.

Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.

 

Example 1:

Input: arr = [1,2,4,4,4,4], m = 1, k = 3
Output: true
Explanation: The pattern (4) of length 1 is repeated 4 consecutive times. Notice that pattern can be repeated k or more times but not less.

*/

// brute force

let containsPattern = (A, K, T) => {
    for (let i = 0, j = K * T; j <= A.length; ++i, ++j) {
        let piece = A.slice(i, i + K).join(''),
            whole = piece.repeat(T);
        if (whole == A.slice(i, j).join(''))
            return true;
    }
    return false;
};


// 