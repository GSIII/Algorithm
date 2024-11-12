function solution(s, skip, index) {
    let result = ''

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    let filterSkip = [...alphabet].filter((alpha)=>!skip.includes(alpha))
    
    for (let char of s) {
        let currentIndex = filterSkip.indexOf(char);
        let newIndex = (currentIndex+index)%filterSkip.length;
        result += filterSkip[newIndex]
    }
    
    return result
}