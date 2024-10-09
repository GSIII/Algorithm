function solution(s) {
    let arr = s.split('');
    let result = 0;
    
    const isValid = (rotatedArr) => {
        let stack = [];
        for (let i = 0; i < rotatedArr.length; i++) {
            // 여는 괄호일 경우 스택에 추가
            if (rotatedArr[i] === '[' || rotatedArr[i] === '{' || rotatedArr[i] === '(') {
                stack.push(rotatedArr[i]);
            } else {
                if (stack.length === 0) return false;
                
                let popEl = stack.pop();
                
                // 닫는 괄호와 스택에서 꺼낸 여는 괄호가 짝이 맞는지 확인
                if ((rotatedArr[i] === ']' && popEl !== '[') ||
                    (rotatedArr[i] === '}' && popEl !== '{') ||
                    (rotatedArr[i] === ')' && popEl !== '(')) {
                    return false;
                }
            }
        }
        // 스택이 비어있다면 모든 괄호가 짝이 맞음
        return stack.length === 0;
    };
    
    // 문자열을 회전하며 유효성 확인
    for (let j = 0; j < s.length; j++) {
        let rotatedArr = arr.slice(j).concat(arr.slice(0, j));
        if (isValid(rotatedArr)) {
            result++;
        }
    }
    
    return result;
}
