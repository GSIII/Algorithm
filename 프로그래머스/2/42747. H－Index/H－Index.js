function solution(citations) {
    citations.sort((a,b)=>b-a)
    let count = 0;
    let i;
    for (i=0;i<citations.length+1;i++) {
        if (citations[i]>=i+1) {
            count++
        }
    }
    return count
}