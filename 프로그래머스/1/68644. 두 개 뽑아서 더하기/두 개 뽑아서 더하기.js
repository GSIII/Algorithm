function solution(numbers) {
    let arr = [];
    let sum = 0;
    for (let i=0;i<numbers.length;i++) {
        for (let j=i+1;j<numbers.length;j++) {
            sum = numbers[i]+numbers[j];
            arr.push(sum)
        }
    }
    let numberSet = new Set();
    for (let k=0;k<arr.length;k++) {
        numberSet.add(arr[k])
    }
    return [...numberSet].sort((a,b)=>a-b)
    
}