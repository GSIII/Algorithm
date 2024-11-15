function solution(numbers) {
    let sumArr = []
    for (let i=0;i<numbers.length;i++) {
        for (let j=i+1;j<numbers.length;j++) {
            let sum = numbers[i]+numbers[j]
            sumArr.push(sum)
        }
    }
    let set = new Set();
    sumArr.forEach(num=>{
        set.add(num)
    })
    return [...set].sort((a,b)=>a-b)
}