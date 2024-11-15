function solution(t, p) {
    let answer = 0;
    for (let i=0;i<t.length;i++) {
        let num = t.slice(i,i+p.length)
        if (num<=p && num.length===p.length) answer++
    }
    return answer
    
}