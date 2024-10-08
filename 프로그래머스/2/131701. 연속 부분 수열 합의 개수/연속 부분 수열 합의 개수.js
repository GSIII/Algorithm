function solution(elements) {
    let n = elements.length;
    
    // 원형 수열을 처리하기 위해 elements 배열을 두 배로 확장
    let extendedElements = elements.concat(elements);  // [7, 9, 1, 1, 4, 7, 9, 1, 1, 4]
    
    let uniqueSums = new Set();  // 중복을 제거하기 위한 Set
    
    // 부분 수열의 길이를 1부터 n까지 증가시키며 모든 경우의 합을 계산
    for (let length = 1; length <= n; length++) {
        // 시작 인덱스를 0부터 n-1까지 탐색
        for (let start = 0; start < n; start++) {
            let sum = 0;
            // 연속된 length 길이의 부분 수열 합을 계산
            for (let i = 0; i < length; i++) {
                sum += extendedElements[start + i];  // 확장된 배열에서 연속된 부분 수열 합을 구함
            }
            uniqueSums.add(sum);  // Set에 합을 추가 (중복 제거됨)
        }
    }
    
    return uniqueSums.size;  // 고유한 합의 개수를 반환
}
