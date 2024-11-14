function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const directions = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ]
    let visited = Array.from(Array(n),()=>Array(m).fill(false))
    visited[0][0] = true;
    let queue = [[0,0,1]] // 현재 위치, 움직인 거리
    
    while (queue.length>0) {
        let [x,y,move] = queue.shift();
        if (x===n-1&&y===m-1) return move
        
        directions.forEach(([dx,dy])=> {
            let nx = dx+x;
            let ny = dy+y;
            
            if (nx>=0 && nx<n && ny>=0 && ny<m && maps[nx][ny]===1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx,ny,move+1])
            }
        })
    }
    return -1
}