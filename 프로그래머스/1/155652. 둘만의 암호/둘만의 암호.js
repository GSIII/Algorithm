function solution(s, skip, index) {
    let answer = ''
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let filterAlphabet = [...alphabet].filter(alpha=>![...skip].includes(alpha))
    
    for (let i=0;i<s.length;i++) {
        let alphaIndex = filterAlphabet.indexOf(s[i])
        
        let newIndex = (alphaIndex+index)%filterAlphabet.length
        answer += filterAlphabet[newIndex]
        
    }
    return answer
    
}