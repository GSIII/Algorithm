function solution(s) {
    let arr = []
    for (let i=0;i<s.length;i++) {
        let firstNum = -1;
        let sameNum = 0;
        for (let j=0;j<i;j++) {
            if (s[i]!==s[j]) {
                firstNum = -1
            } else {
                sameNum = i-j
            }
        }
        if (firstNum===-1 && sameNum ===0) {
            arr.push(firstNum)
        } else if (sameNum !==0) {
            arr.push(sameNum)
        }
    }
    return arr
}