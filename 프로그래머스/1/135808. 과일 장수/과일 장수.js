function solution(k, m, score) {
    score.sort((a,b)=>b-a);
    let bestProfit = 0;
    for (let i=0;i<=score.length-m;i+=m) {
        let box = score.slice(i,i+m)
        let price = Math.min(...box)*m
        bestProfit += price
    }
    return bestProfit
}