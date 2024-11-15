function solution(number, k) {
    let stack = [];
    let count = 0
    for (let i=0;i<number.length;i++) {
        while(count<k && stack[stack.length-1]<number[i]) {
            stack.pop();
            count++
        } 
        stack.push(number[i])
    }
    while(count<k) {
        stack.pop()
        count++
    }
    return stack.join('')
}