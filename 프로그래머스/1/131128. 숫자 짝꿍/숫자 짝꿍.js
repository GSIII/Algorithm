function solution(X, Y) {
    let xMap = new Map();
    let yMap = new Map();
    let x = [...X];
    let y = [...Y]
    let answer = [];
    x.forEach(el=>{
        xMap.set(el,(xMap.get(el)||0)+1)
    })
    
    y.forEach(el=>{
        yMap.set(el,(yMap.get(el)||0)+1)
    })
    
    for (let [key,value] of xMap) {
        if (yMap.has(key)) {
            let minCnt = Math.min(value,yMap.get(key))
            
            for (let i=1;i<=minCnt;i++) {
                answer.push(key)
            }
        }
    }
    answer.sort((a,b)=>b-a)
    if (answer.length===0) return '-1'
    for (let ans of answer) {
        if (ans==='0') return '0'
        return answer.join('')
    }
    
}