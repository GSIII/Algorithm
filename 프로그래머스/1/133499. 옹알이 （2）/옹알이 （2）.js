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
                temp = temp.split(w).join(' ') // 빈칸으로 join해주지 않으면 split한 후 join되는 문자열이 words 배열에 포함될 수 있다. 따라서 빈칸으로 join해준다.
                console.log(temp,w)
            }
            if (temp.trim()==='') {
                answer++
            }
        }
    }
    return answer
}