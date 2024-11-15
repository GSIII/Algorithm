function solution(n) {
    return +(String(n).split('').map(char=>+char).sort((a,b)=>b-a).join(''))
}