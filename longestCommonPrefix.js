/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

//input --> array of strings, all strings will be in lowercase, less than 200 strings, no common prefix = ''

//Examples
// ['redding', 'reply', 'resevoir'] --> 're'
// ['explanation', 'explore', 'explain'] --> 'expl'
// ['book', 'racecar', 'house'] --> ''

function findCommonPrefix(arr){
    return arr.reduce((prev,next) => {
            let i=0;
            while(prev[i] && next[i] && prev[i] === next[i]) i++;
            return prev.slice(0,i);
        })}
    
    console.log(findCommonPrefix(['redding', 'reply', 'resevoir']), 're')
    console.log(findCommonPrefix(['explanation', 'explore', 'explain']), 'expl')
    console.log(findCommonPrefix(['book', 'racecar', 'house']), '')