function solution(progresses, speeds) {
    let workDay = [];
    for (let i=0;i<progresses.length;i++) {
        let workDate = Math.ceil((100-progresses[i])/speeds[i])
        workDay.push(workDate)
    }
    for (let j=0;j<workDay.length;j++) {
        if (workDay[j]>=workDay[j+1]) {
            workDay[j+1] = workDay[j]
        }
    }
    let workMap = new Map();
    workDay.forEach((count)=>{
        workMap.set(count,(workMap.get(count)||0)+1)
    })
    let answer = [];
    workMap.forEach(count=>answer.push(count))
    
    return answer
}