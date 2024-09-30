function solution(n) {
    let countOne =(num)=> num.toString(2).split('1').length-1;
    let targetCount = countOne(n);
    let nextNum = n+1;
    while(countOne(nextNum) !== targetCount) {
        nextNum++
    }
    return nextNum
}