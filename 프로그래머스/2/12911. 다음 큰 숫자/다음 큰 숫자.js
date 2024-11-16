function solution(n) {
    const oneCnt = (number) =>{
        return number.toString(2).split('1').length-1
    }
    let nextNum = n+1;
    while(oneCnt(n)!==oneCnt(nextNum)) {
        nextNum++
    }
    return nextNum
}