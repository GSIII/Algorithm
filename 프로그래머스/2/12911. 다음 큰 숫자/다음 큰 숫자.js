function solution(n) {
    const oneNum = (num) =>{
        return num.toString(2).split('1').length-1
    }
    let nextNum = n+1
    while(oneNum(n) !== oneNum(nextNum)) {
        nextNum++
    }
    return nextNum
}