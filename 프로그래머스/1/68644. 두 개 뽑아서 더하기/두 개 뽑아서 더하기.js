function solution(numbers) {
    let set = new Set();
    let arr = [];
    for (let i=0;i<numbers.length;i++) {
        for (let j=i+1;j<numbers.length;j++) {
            let sum = numbers[i]+numbers[j]
            arr.push(sum)
        }
    }
    arr.forEach(num=>set.add(num))
    return [...set].sort((a,b)=>a-b)
}