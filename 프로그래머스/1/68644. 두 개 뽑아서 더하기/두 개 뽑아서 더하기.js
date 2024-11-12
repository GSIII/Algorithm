function solution(numbers) {
    let arr = []
    for (let i=0;i<numbers.length;i++) {
        for (let j=i+1;j<numbers.length;j++) {
            let sum = numbers[i]+numbers[j]
            arr.push(sum)
        }
    }
    let arrSet = new Set();
    arr.forEach(num=>arrSet.add(num))
    return [...arrSet].sort((a,b)=>a-b)
}