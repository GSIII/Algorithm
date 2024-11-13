function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const directions = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]    
    ]
    const visited = Array.from(Array(n),()=>Array(m).fill(false))
    visited[0][0] = true;
    
    
    const queue = [[0,0,1]];
    
    while(queue.length>0) {
        let [x,y,move] = queue.shift()
        if (x===n-1 && y===m-1) return move
        
        directions.forEach(([dx,dy])=>{
            const nx = dx+x;
            const ny = dy+y;
            
            if (nx>=0&&nx<n && ny>=0&&ny<m&&maps[nx][ny]===1&&!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx,ny,move+1])
            }
        })

        
    }
    return -1
    
}