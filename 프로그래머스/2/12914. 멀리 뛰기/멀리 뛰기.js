function solution(n) {
    let n1 = 1;
    let n2 = 2;
    let temp;
    for (let i=3;i<=n;i++) {
        temp = (n1+n2)%1234567;
        n1 = n2;
        n2 = temp;
    }
    if (n===1) {
        return 1
    } else if (n===2) {
        return 2
    }
    return temp
}