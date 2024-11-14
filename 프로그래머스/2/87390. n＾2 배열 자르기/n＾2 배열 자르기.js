function solution(n, left, right) {
    let arr = []
    for (let i=left;i<=right;i++) {
        let row = Math.floor(i/n);
        let col = i%n;
        let num = Math.max(row+1,col+1)
        arr.push(num)
    }
    return arr
}