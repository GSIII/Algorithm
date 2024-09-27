function solution(n) {
    let count = 0;

    // k는 연속된 숫자의 개수
    for (let k = 1; k * (k + 1) / 2 <= n; k++) {
        // n에서 k개의 연속된 자연수의 합의 첫 부분을 뺀 후 k로 나누어 떨어지는지 확인
        if ((n - (k * (k - 1)) / 2) % k === 0) {
            count++;
        }
    }

    return count;
}