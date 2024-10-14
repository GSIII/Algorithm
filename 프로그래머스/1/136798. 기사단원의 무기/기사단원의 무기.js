function solution(number, limit, power) {
    let divisors = Array(number+1).fill(0);
    
    for (let i=1;i<=number;i++) {
        for (let j=i;j<=number;j+=i){
            divisors[j]++
        }
    }
    
    let total = 0;
    for (let i=1;i<divisors.length;i++) {
        if (divisors[i]>limit) {
            total+=power;
        } else {
            total+=divisors[i];
        }
    }
    
    return total
}