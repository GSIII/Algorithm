function solution(N, stages) {
    let arr = [];
    let map = new Map();
    let totalUsers = stages.length;
    
    for (let i=1;i<=N;i++) {
        let failed = stages.filter((stage)=>stage===i).length
        map.set(i,{failed,total:stages.filter(stage=>stage>=i).length})
    }
    
    for (let i=1;i<=N;i++) {
        let {failed,total} = map.get(i)
        let failRate = failed===0 ? 0 : failed/total
        arr.push({stage:i,failRate})
    }

    arr.sort((a,b)=>b.failRate-a.failRate || a.stage-b.stage)
    return arr.map(item=>item.stage)
    
}