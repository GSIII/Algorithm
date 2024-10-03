// 피보나치
function solution(n) {
    let a = 1;
    let b = 2;
    let temp;
    for (let i=3;i<=n;i++) {
        temp = (a+b)%1234567;
        a=b;
        b=temp;
    }
    if (n===1) {
        return 1
    } else if (n===2) {
        return 2
    }
    return temp
}