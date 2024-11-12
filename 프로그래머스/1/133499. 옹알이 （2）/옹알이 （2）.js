function solution(babbling) {
    let words = ["aya", "ye", "woo", "ma" ];
    let result = 0;
    
    for (let word of babbling) {
        let isValid = true;
        
        for (let w of words) {
            if (word.includes(w+w)) {
                isValid = false
                break;
            }
        }
        
        if (isValid) {
            let newWord = word
            for (let w of words) {
                newWord = newWord.split(w).join(' ')
            }
            if (newWord.trim()==='') {
                result++
            }
        }
        
    }
    
    return result
}