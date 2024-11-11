function solution(n) {
    let num = Math.sqrt(n)
    let rest = num%1
    return rest===0 ? (num+1)**2 : -1
}