function solution(progresses, speeds) {
    let answer = [];
    let workDays = [];
    for (let i=0;i<progresses.length;i++) {
        let remainingDays = Math.ceil((100 - progresses[i]) / speeds[i]);
        workDays.push(remainingDays);
    }
    let deployDate = workDays[0];
    let count = 1;
    for (let j=1;j<workDays.length;j++) {
        if (deployDate>=workDays[j]) {
            count++
        } else {
            answer.push(count)
            deployDate = workDays[j];
            count = 1
        }
    }
    answer.push(count)
    return answer
}