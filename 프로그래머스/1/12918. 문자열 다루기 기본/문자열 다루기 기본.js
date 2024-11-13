function solution(s) {
    if (s.length===4 || s.length===6) {
        for (let w of s) {
            if (isNaN(w)) {
                return false
            } 
        }
        return true
    } else {
        return false
    }
}