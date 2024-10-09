function solution(nums) {
let count = 0;

    const isPrime = (number) => {
        if (number < 2) return false;
        for (let i = 2; i <number; i++) {
            if (number % i === 0) return false;
        }
        return true;
    };

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) {
                    count++;
                }
            }
        }
    }

    return count;
}