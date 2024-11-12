function solution(want, number, discount) {
    let answer = 0
    let wantMap = new Map()
    
    want.forEach((item,index)=>{
        wantMap.set(item,number[index])
    })
    
    for (let i=0;i<discount.length-9;i++) {
        let currentMap = new Map()
        for (let j=i;j<i+10;j++) {
            currentMap.set(discount[j],(currentMap.get(discount[j])||0)+1)
        }
        
        let isMatch = true;
        for (let [key,value] of wantMap) {
            if (currentMap.get(key) !== value) {
                isMatch = false
                break
            }
        }
        if (isMatch) {
            answer++
        }
    }
    return answer
    
}