function solution(s) {
    let result = '';
    let isFirst = true;
    for (let i=0;i<s.length;i++) {
        let char = s[i];
        
        if (char === ' ') {
            result += char
            isFirst = true
        } else {
            if (isFirst) {
                result += char.toUpperCase();
                isFirst = false
            } else {
                result += char.toLowerCase()
            }
        }
    }
    return result
}