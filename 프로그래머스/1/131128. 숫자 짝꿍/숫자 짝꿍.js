function solution(X, Y) {
    let arr = []
    let x = [...X]
    let y = [...Y]
    let xMap = new Map();
    let yMap = new Map();
    
    x.forEach((num,count)=>{
        xMap.set(num,(xMap.get(num)||0)+1)
    })
    y.forEach((num,count)=>{
        yMap.set(num,(yMap.get(num)||0)+1)
    })
    
    xMap.forEach((count, num) => {
        if (yMap.has(num)) {
            let minCount = Math.min(count, yMap.get(num));
            for (let i = 0; i < minCount; i++) {
                arr.push(num);
            }
        }
    });
    
    arr.sort((a,b)=>b-a)
    
    for (let i=0;i<arr.length;i++) {
        if (arr[i]==='0') {
            return '0'
        } else {
            return arr.join('')
        }
    }
    if (arr.length===0) return '-1'
}