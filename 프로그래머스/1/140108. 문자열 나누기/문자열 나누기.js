function solution(s) {
    let answer = 0; // 분리된 문자열의 개수
    let stack = []; // 현재 상태를 추적하는 스택

    for (const char of s) {
        // 스택이 비어있으면 새로운 문자열 시작
        if (stack.length === 0) {
            stack.push([char, 1]); // [문자, 개수]
            answer++; // 새 문자열로 카운트
        } else {
            // 스택의 마지막 문자가 현재 문자와 같다면 개수 증가
            if (stack[stack.length - 1][0] === char) {
                stack[stack.length - 1][1]++;
            } else {
                // 다른 문자라면 개수 감소 (x와 x가 아닌 문자 비교)
                stack[stack.length - 1][1]--;
                // 개수가 0이 되면 해당 문자열 종료
                if (stack[stack.length - 1][1] === 0) {
                    stack.pop();
                }
            }
        }
    }

    return answer;
}
