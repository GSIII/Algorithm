function solution(n) {
    let n0 = 0;
    let n1 = 1;
    let sum
    for (let i=2;i<=n;i++) {
        sum = (n0+n1)%1234567;
        n0 = n1;
        n1 = sum
    }
    return sum
    
}