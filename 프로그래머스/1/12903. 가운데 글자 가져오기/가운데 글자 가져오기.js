function solution(s) {
    let length = s.length
    if (length%2===0) {
        return s[Math.floor(length/2)-1]+s[Math.floor(length/2)]
    } else {
        return s[Math.floor(length/2)]
    }
}