function solution(k, m, score) {
    score.sort((a,b)=>b-a)
    let maxProfit = 0
    const price = 0
    for (let i = 0; i <= score.length - m; i += m) {
        const box = score.slice(i, i + m);
        const price = Math.min(...box)*m;
        maxProfit += price
    }
    return maxProfit
}