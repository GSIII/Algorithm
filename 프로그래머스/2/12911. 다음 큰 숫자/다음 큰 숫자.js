function solution(n) {
    const oneCount =(num)=> num.toString(2).split('1').length-1;
    let nextNum = n+1;
    while(oneCount(n) !== oneCount(nextNum)) {
        nextNum++
    }
    return nextNum
}