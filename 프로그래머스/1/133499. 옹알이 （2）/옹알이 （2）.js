function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let result = 0;
    for (let word of babbling) {
        let valid = true;
        
        for (let w of words) {
            if (word.includes(w+w)) {
                valid = false;
                break;
            }
        }
        
        if (valid) {
            let tempWord = word;
            for (let w of words) {
                tempWord = tempWord.split(w).join(' ')
            }
            if (tempWord.trim()===''){
                result++
            }
        }
    }
    return result
}