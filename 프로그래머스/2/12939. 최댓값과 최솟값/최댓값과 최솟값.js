function solution(s) {
    let arr = s.split(' ')
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    return `${minNum} ${maxNum}`
    
}