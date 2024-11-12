function solution(s) {
    let arr = [];
    let map = new Map();
    for (let i=0;i<s.length;i++) {
        if (map.has(s[i])) {
            arr.push(i-map.get(s[i]))
        } else {
            arr.push(-1)
        }
        map.set(s[i],i)
        
    }
    return arr
}