function solution(n) {
    const oneCount = (num) => {
       return num.toString(2).split('1').length-1;
    }
    let nNext = n+1
    while (oneCount(n) !== oneCount(nNext)) {
        nNext++
    }
    return nNext
}