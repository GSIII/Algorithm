function solution(priorities, location) {
    let count = 0;
    let queue = priorities.map((priority,index)=>({priority,index}))
    
    while(queue.length>0) {
        let current = queue.shift();
        if (queue.some(process=>process.priority>current.priority)) {
            queue.push(current)
        } else {
            count++;
            if (current.index === location) {
                return count
            }
        }
    }
}