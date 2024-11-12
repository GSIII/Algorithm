function solution(N, stages) {
    let answer = []
    let map = new Map()
    
    for (let i=1;i<=N;i++) {
        let fail = stages.filter(stage=>stage===i).length;
        map.set(i,{fail,totalUser:stages.filter(stage=>stage>=i).length})
    }
    
    for (let i=1;i<=N;i++) {
        let {fail,totalUser} = map.get(i)
        let failRate = fail===0 ? 0 : fail/totalUser
        answer.push({i,failRate})
    }
    answer.sort((a,b)=>b.failRate-a.failRate || a.i-b.i)
    return answer.map(el=>el.i)
}