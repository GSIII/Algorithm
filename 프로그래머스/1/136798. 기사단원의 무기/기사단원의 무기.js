function solution(number, limit, power) {
    
    let divisors = Array(number + 1).fill(0);

    
    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divisors[j]++;
        }
    }

    let totalWeight = 0;

    
    for (let i = 1; i <= number; i++) {
        if (divisors[i] > limit) {
            totalWeight += power;  
        } else {
            totalWeight += divisors[i];  
        }
    }

    return totalWeight;
}
