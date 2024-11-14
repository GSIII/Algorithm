function solution(number, k) {
    let count = 0;
    let stack = [];
    
    for (let num of number) {
        while(count<k&&num>stack[stack.length-1]){
            stack.pop();
            count++;
        }
        stack.push(num)
    }
    while(count<k) {
        stack.pop();
        count++
    }
    return stack.join('')
}