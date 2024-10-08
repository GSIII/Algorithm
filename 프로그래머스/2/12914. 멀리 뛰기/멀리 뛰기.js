function solution(n) {
    let n1 = 1;
    let n2 = 2;
    let result 
    for (let i=3;i<=n;i++){
        result = (n1+n2)%1234567;
        n1 = n2;
        n2 = result;
    }
    if (n===1) {
        return 1
    } else if (n===2) {
        return 2
    }
    return result
}