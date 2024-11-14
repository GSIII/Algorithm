function solution(s, skip, index) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let filteredAlpha = [...alpha].filter(al=>!skip.includes(al))
    let answer = ''
    
    for (let i=0;i<s.length;i++) {
        let oldIdx = filteredAlpha.indexOf(s[i])
        let newIdx = (oldIdx+index)%filteredAlpha.length
        answer += filteredAlpha[newIdx]
    }
    return answer
}