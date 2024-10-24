function solution(strings, n) {
    for (let i=0;i<strings.length;i++) {
        strings.sort((a,b)=>{
            if (a[n]>b[n]) return 1
            if (a[n]<b[n]) return -1
            
            return a>b ? 1 : -1
        })
    }
    return strings
 }