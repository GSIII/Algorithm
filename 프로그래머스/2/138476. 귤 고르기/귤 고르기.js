function solution(k, tangerine) {
    let tangerineMap = new Map();
    tangerine.forEach(size=>{
        tangerineMap.set(size, (tangerineMap.get(size)||0)+1)
    })
    
    let arr = Array.from(tangerineMap.values()).sort((a, b) => b - a);

    let selectedNum = 0;
    let count = 0;
    
    for (let i=0;i<arr.length;i++) {
        selectedNum += arr[i]
        count++
        
        if (selectedNum>=k) {
            break;
        }
    }
    return count
}