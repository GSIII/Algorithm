function solution(X, Y) {
    let answer = []
    let x = [...X];
    let y = [...Y];
    let xMap = new Map();
    let yMap = new Map();
    
    x.forEach((num,cnt)=>{
        xMap.set(num,(xMap.get(num)||0)+1)
    })
    y.forEach((num,cnt)=>{
        yMap.set(num,(yMap.get(num)||0)+1)
    })
    
    for (let [xNum,xCnt] of xMap) {
        if (yMap.has(xNum)) {
            let minCnt = Math.min(xCnt,yMap.get(xNum))
            
            for (let i=1;i<=minCnt;i++) {
                answer.push(xNum)
            }
        }
    }
    answer.sort((a,b)=>b-a);
    if (answer.length===0) return '-1';
    for (let i=0;i<answer.length;i++) {
        if (answer[i]==='0') {
            return '0'
        } else {
            return answer.join('')
        }
    }
}