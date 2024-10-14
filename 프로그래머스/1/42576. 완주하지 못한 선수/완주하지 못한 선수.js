function solution(participant, completion) {
    let map = new Map()
    for (let i=0;i<participant.length;i++){
        map.set(participant[i],(map.get(participant[i])||0)+1)
        map.set(completion[i],(map.get(completion[i])||0)-1)
    }
    for (let [k,c] of map) {
        if (c>0) {
            return k
        }
    }
}