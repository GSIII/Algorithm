function solution(arr, divisor) {
    let numbers = []
    for (let num of arr) {
        if (num%divisor===0) {
            numbers.push(num)
        } 
    }
    if (numbers.length===0) {
        numbers.push(-1)
    }
    
    
    return numbers.sort((a,b)=>a-b)
}