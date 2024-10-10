function solution(k, score) {
    let hallOfFame = [];
    let minArr = [];      

    for (let i = 0; i < score.length; i++) {
        
        hallOfFame.push(score[i]);
        
        
        hallOfFame.sort((a, b) => b - a);
        if (hallOfFame.length > k) {
            hallOfFame.pop(); 
        }

        
        minArr.push(hallOfFame[hallOfFame.length-1])
    }
    
    return minArr;
}
