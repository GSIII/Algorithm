function solution(numbers) {
    let arr = []
    for (let i=0;i<numbers.length;i++) {
        for (let j=i+1;j<numbers.length;j++) {
            arr.push(numbers[i]+numbers[j])
        }
    }
    let sumArr = new Set(arr)
    return [...sumArr].sort((a,b)=>a-b)
}