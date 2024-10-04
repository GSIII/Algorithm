function solution(s) {
    let word = '';
    let number = ''
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i=0;i<s.length;i++) {
        if (isNaN(s[i])) {
            word += s[i];
            if (numbers.includes(word)) {
                number += numbers.indexOf(word);
                word = '';
            }
        }else {
            number += s[i]
        }
    }
    return +number
}