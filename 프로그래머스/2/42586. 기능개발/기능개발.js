function solution(progresses, speeds) {
    let answer = [];
    let workDays = [];
    for (let i=0;i<progresses.length;i++) {
        let workDay = Math.ceil((100-progresses[i])/speeds[i]);
        workDays.push(workDay)
    }
    let count = 1;
    let deployDate = workDays[0]
    for (let i=1;i<workDays.length;i++) {
        if (deployDate>=workDays[i]) {
            count++
        } else {
            answer.push(count);
            deployDate = workDays[i];
            count = 1;
        }
    }
    answer.push(count)
    return answer
}