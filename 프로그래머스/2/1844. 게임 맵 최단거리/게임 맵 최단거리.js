function solution(maps) {
    let n = maps.length;
    let m = maps[0].length;
    let directions =[
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ]
    
    let queue = [[0,0,1]]
    let visited = Array.from(Array(n),()=>Array(m).fill(false))
    
    while (queue.length>0) {
        let [dx,dy,move] = queue.shift();
        
        if (dx===n-1&&dy===m-1) return move
        for (let [x,y] of directions) {
            let nx = dx+x;
            let ny = dy+y;
            
            if (nx>=0&&nx<n&&ny>=0&&ny<m&&!visited[nx][ny]&&maps[nx][ny]===1) {
                queue.push([nx,ny,move+1])
                visited[nx][ny] = true
            }
        }
    }
    return -1
}