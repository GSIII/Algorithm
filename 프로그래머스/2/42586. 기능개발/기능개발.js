function solution(progresses, speeds) {
    let deployDate = [];
    let answer = new Map();
    let result = []
    for (let i=0;i<progresses.length;i++) {
        let date = Math.ceil((100-progresses[i])/speeds[i]);
        deployDate.push(date)
    }
    for (let j = 0; j < deployDate.length - 1; j++) {
        if (deployDate[j] > deployDate[j + 1]) {
            deployDate[j + 1] = deployDate[j]; 
        }
        
        
    }
    for (let k=0;k<deployDate.length;k++) {
        answer.set(deployDate[k],(answer.get(deployDate[k]) ||0)+1)
    }
    answer.forEach((count)=>{
        return result.push(count)
    })
    return result
    
}