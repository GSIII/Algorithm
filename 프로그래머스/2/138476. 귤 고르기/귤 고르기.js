function solution(k, tangerine) {
    let tangerineMap = new Map();
    tangerine.forEach(size=>{
        tangerineMap.set(size, (tangerineMap.get(size)||0)+1)
    })
    let arr = [];
    tangerineMap.forEach(count=>arr.push(count))
    arr.sort((a,b)=>b-a)
    let count = 0;
    
    for (let i=0;i<arr.length;i++) {
        k -= arr[i]
        count++
        
        if (k<=0) {
            break;
        }
    }
    return count
}