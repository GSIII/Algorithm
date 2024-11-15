function solution(s){
    let pCnt = 0;
    let yCnt = 0;
    for (let char of s) {
        if (char==='p'||char==='P') {
            pCnt++
        } else if (char==='y'||char==='Y') {
            yCnt++
        }
    }
    return pCnt===yCnt ? true : false
}