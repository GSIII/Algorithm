function solution(n) {
    let n0 = 0;
    let n1 = 1;
    let temp;
    for (let i=2;i<=n;i++) {
        temp = (n0+n1)%1234567
        n0 = n1;
        n1 = temp;
    }
    return temp
}