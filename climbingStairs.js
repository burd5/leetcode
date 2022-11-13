/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

// input between 1 and 45, a single number of stairs

// Examples
// 2 == 2
// 3 == 3
// 4 == 5

// fibbonaci solution

const climbingStairs = function(n) {
    if (n < 3) return n;
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        const current = first + second;
		// Update first and second for next loop
        first = second;
        second = current;
    }
	// When loop fininshes, second is pointing to the result of the last index, which is the result of the whole function
    return second;

}

// memoization solution

var climbStairs = function(n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n];
};