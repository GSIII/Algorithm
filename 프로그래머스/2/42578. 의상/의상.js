function solution(clothes) {
    let clothesMap = new Map()
    clothes.forEach(([name,type])=>{
        clothesMap.set(type,(clothesMap.get(type)||0)+1)
    })
    let answer = 1;
    clothesMap.forEach((count)=>{
        answer *= (count+1)
    })
    return answer-1
}