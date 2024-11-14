function solution(s) {
    let word = ''
    let num = '';
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i=0;i<s.length;i++) {
        if (isNaN(s[i])) {
            word += s[i]
            if (numbers.includes(word)) {
                num += numbers.indexOf(word)
                word = ''
            } 
        } else {
            num +=s[i]
        }
    }
    return +num
}