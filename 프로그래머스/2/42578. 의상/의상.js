function solution(clothes) {
    let clothMap = new Map();
    clothes.forEach(([name,type])=>{
        clothMap.set(type,(clothMap.get(type) || 0)+1)
    })
    let answer = 1;
    clothMap.forEach(count=>answer *= (count+1))
    return answer-1
}