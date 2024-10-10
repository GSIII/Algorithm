function solution(a, b, n) {
    let totalCoca = 0
    while(n>=a) {
        let exchangeCoca = Math.floor(n/a)*b;
        let restCoca = n%a;
        
        totalCoca += exchangeCoca;
        
        n = exchangeCoca+restCoca
    }
    return totalCoca
}