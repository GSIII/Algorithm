function solution(k, tangerine) {
    let tangerineMap = new Map();
    
    tangerine.forEach((num)=>{
        tangerineMap.set(num,(tangerineMap.get(num)||0)+1)
    })
    
    
    let tangerineNum = Array.from(tangerineMap.values()).sort((a,b)=>b-a);
    
    let selectedNum = 0;
    let count = 0
    for (let i=0;i<tangerineNum.length;i++) {
        k -= tangerineNum[i]
        count++
        if (k<=0) {
            break;
        }
        
    }
    return count
}