function solution(progresses, speeds) {
    let answer = new Map();
    let workSpeed = [];
    let result = [];
    for (let i=0;i<progresses.length;i++) {
        let speed = Math.ceil((100-progresses[i])/speeds[i])
        workSpeed.push(speed)
    }
    for (let j=0;j<workSpeed.length-1;j++) {
        if (workSpeed[j]>workSpeed[j+1]) {
            workSpeed[j+1] = workSpeed[j]
        }
    }
    for (let k=0;k<workSpeed.length;k++) {
        answer.set(workSpeed[k],(answer.get(workSpeed[k])||0)+1)
    }
    answer.forEach(count=>result.push(count))
    return result
}