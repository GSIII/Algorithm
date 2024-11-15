function solution(X, Y) {
    let x = [...X];
    let y = [...Y];
    
    let xMap = new Map();
    let yMap = new Map();
    
    let answer = [];
    
    x.forEach(num=>{
        xMap.set(num,(xMap.get(num)||0)+1)
    })
    y.forEach(num=>{
        yMap.set(num,(yMap.get(num)||0)+1)
    })
    
    for (let [key,value] of xMap) {
        if (yMap.has(key)) {
            let minCnt = Math.min(value,yMap.get(key))
            for (let i=1;i<=minCnt;i++) {
                answer.push(key)
            } 
        }
    }
    answer.sort((a,b)=>b-a);
    if (answer.length===0) return '-1'
    for (let num of answer) {
        if (num==='0') return '0'
        return answer.join('')
    }
}