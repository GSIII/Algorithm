function solution(s, n) {
    let answer = ''
    for (let i=0;i<s.length;i++) {
        let ascii = s.charCodeAt(i)
        if (ascii>=65 && ascii<=90) {
            ascii = ascii+n
            
            if (ascii>90) {
                ascii = ascii-26
            }
        } else if (ascii>=97 && ascii<=122) {
            ascii = ascii+n
            if (ascii>122) {
                ascii = ascii-26
            }
        }
        
        let string = String.fromCharCode(ascii)
        answer+=string
    }
    return answer
}