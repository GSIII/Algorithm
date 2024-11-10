function solution(answers) {
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let supo1Ans = 0;
    let supo2Ans = 0;
    let supo3Ans = 0;
    
    for (let i=0;i<answers.length;i++) {
        if (supo1[i%supo1.length]===answers[i]) supo1Ans++
        if (supo2[i%supo2.length]===answers[i]) supo2Ans++
        if (supo3[i%supo3.length]===answers[i]) supo3Ans++
    }
    
    let answer = [supo1Ans,supo2Ans,supo3Ans];
    const maxScore = Math.max(...answer)
    
    return answer.map((score,index)=>(score===maxScore?index+1:null))
                 .filter((index)=>index!==null)
    
    
    
}