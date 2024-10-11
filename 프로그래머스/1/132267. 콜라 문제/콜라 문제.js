function solution(a, b, n) {
    let totalCoca = 0;
    while(n>=a) {
        let exchangeCoca = Math.floor((n/a))*b;
        let leftCoca = n%a;
        totalCoca += exchangeCoca
        n = exchangeCoca+leftCoca
    }
    return totalCoca
}