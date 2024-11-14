function solution(numbers, target) {
    let answer = 0;
    const dfs = (number,index) =>{
        if (index===numbers.length) {
            if (number===target) {
                answer++
            }
            return
        }
        
        dfs(number+numbers[index],index+1);
        dfs(number-numbers[index],index+1)
        
    }
    dfs(0,0)
    return answer
}