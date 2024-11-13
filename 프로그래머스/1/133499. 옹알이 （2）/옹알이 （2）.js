function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    
    for (let word of babbling) {
        let isValid = true;
        let temp=word
        
        for (let w of words) {
            if (temp.includes(w+w)) {
                isValid = false
                break
            }
        }
        
        if (isValid) {
            for (let w of words) {
                temp = temp.split(w).join(' ')
            }
            if (temp.trim()==='') {
                answer++
            }
        }
    }
    return answer
}