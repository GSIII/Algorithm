function solution(participant, completion) {
    let resultMap = new Map();
    for (let i=0;i<participant.length;i++) {
        resultMap.set(participant[i],(resultMap.get(participant[i])||0)+1);
        resultMap.set(completion[i],(resultMap.get(completion[i])||0)-1);
    }
    for (let [k,c] of resultMap) {
        if (c>0) return k
    }
    
}