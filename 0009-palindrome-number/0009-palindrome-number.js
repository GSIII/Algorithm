/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverseX = Number(x.toString().split('').reverse().join(''))
    return x===reverseX ? true : false
};