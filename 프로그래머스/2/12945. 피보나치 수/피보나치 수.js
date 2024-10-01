function solution(n) {
    let a = 0;
    let b = 1;
    let temp;
    for (let i=2;i<=n;i++) {
        temp = (a+b)%1234567;
        a=b;
        b=temp
    }
    return temp
}