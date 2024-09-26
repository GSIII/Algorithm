function solution(clothes) {
    let obj = {};
    for (let arr of clothes) {
        obj[arr[1]] = (obj[arr[1]]||0)+1;
    }
    
    let answer = 1;
    for (let type in obj) {
        answer *= obj[type]+1
    }
    return answer-1
}