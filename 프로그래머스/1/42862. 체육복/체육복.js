function solution(n, lost, reserve) {
    let newLost = lost.filter(l=>!reserve.includes(l)).sort((a,b)=>a-b)
    let newReserve = reserve.filter(r=>!lost.includes(r)).sort((a,b)=>a-b)
    
    let student = n-newLost.length;
    for (let i=0;i<newReserve.length;i++) {
        for (let j=0;j<newLost.length;j++) {
            if (newReserve[i]-1===newLost[j] || newReserve[i]+1===newLost[j]) {
                student++;
                newReserve[i] = -1;
                newLost.splice(j,1)
                break;
            }
        }
    }
    return student
}