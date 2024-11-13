function solution(numbers, target) {
    let answer = 0;
    let stack = [[0,0]];
    
    while(stack.length>0) {
        let [index,currentSum] = stack.pop();
        if (index===numbers.length) {
            if (currentSum===target) {
                answer++
            }
            continue;
        }
        stack.push([index+1,currentSum+numbers[index]]);
        stack.push([index+1,currentSum-numbers[index]])
    }
    return answer
}