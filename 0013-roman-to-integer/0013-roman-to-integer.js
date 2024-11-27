/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanNum = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let number = 0;
    for (let i=0;i<s.length;i++) {
        let current = s[i];
        let next = s[i+1];
        if(next && romanNum[next]>romanNum[current]) {
            number -= romanNum[current]
        } else {
            number += romanNum[current]
        }
    }
    return number
};