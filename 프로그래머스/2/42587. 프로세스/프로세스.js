function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((priority,index)=>({priority,index}))
    while(queue.length>0) {
        let current = queue.shift()
        if (queue.some(process=>process.priority>current.priority)){
            queue.push(current)
        } else {
            answer++;
            
            if (current.index===location) {
                return answer
            }
        }
    }
}