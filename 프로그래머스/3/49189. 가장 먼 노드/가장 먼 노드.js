function solution(n, edge) {
    let graph = Array.from(Array(n+1),()=>[])
    
    edge.forEach(([src,dest])=>{
        graph[src].push(dest);
        graph[dest].push(src)
    })
    
    
    let queue = [1];
    let distance = Array(n+1).fill(-1)
    distance[1]=0
    
    while(queue.length>0) {
        let node = queue.shift();
        for (let neighbor of graph[node]) {
            if (distance[neighbor]===-1){
                distance[neighbor]=distance[node]+1;
                queue.push(neighbor)
            }
        }
    }
    let maxDistance = Math.max(...distance);
    return distance.filter(d=>d===maxDistance).length
    
}