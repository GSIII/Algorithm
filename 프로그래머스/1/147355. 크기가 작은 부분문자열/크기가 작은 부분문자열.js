function solution(t, p) {
    let count = 0;
    for (let i=0;i<t.length;i++) {
        let str = t.substring(i,i+p.length)
        if (str.length===p.length && str<=p) {
            count++
        }
    }
    return count
}