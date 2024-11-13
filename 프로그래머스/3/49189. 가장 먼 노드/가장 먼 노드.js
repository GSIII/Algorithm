function solution(n, edge) {
    const graph = Array.from(Array(n+1),()=>[])

    
    edge.forEach(([src,dest])=>{
        graph[src].push(dest);
        graph[dest].push(src)
    })
    
    
    const distance = Array(n+1).fill(-1)
    distance[1]=0
    const queue = [1]
    
    while(queue.length>0) {
        const node = queue.shift();
        
        for (let neighbor of graph[node]) {
            if (distance[neighbor]===-1) {
                distance[neighbor] = distance[node]+1
                queue.push(neighbor)
            }
        }
    }
    const maxDistance = Math.max(...distance);
    return distance.filter(el=>el===maxDistance).length
}