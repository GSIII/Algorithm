function solution(numbers, target) {
    let answer = 0;
    const dfs = (currentNumber,index) =>{
        if (numbers.length===index) {
            if (currentNumber===target) {
                answer++
            }
            return
        }
        dfs(currentNumber+numbers[index],index+1)
        dfs(currentNumber-numbers[index],index+1)
    }
    
    dfs(0,0)
    return answer
}