function solution(priorities, location) {
    let queue = priorities.map((priority,index)=>({priority,index}))
    let answer = 0;
    while(queue.length>0) {
        let current = queue.shift();
        if (queue.some(process=>process.priority>current.priority)) {
            queue.push(current)    
        } else {
            answer++
            
            if (location===current.index) {
                return answer
            }
        }
    }
}