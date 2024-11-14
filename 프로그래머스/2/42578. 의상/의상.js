function solution(clothes) {
    let answer = 1;
    let map = new Map();
    clothes.forEach(([_,type])=>{
        map.set(type,(map.get(type)||0)+1)
    })
    
    for (let [key,value] of map) {
        let num = value+1
        answer *= num
    }
    return answer-1
}