function solution(k, score) {
    let fameArr = [];
    let answer = [];
    for (let i=0;i<score.length;i++) {
        fameArr.push(score[i]);
        fameArr.sort((a,b)=>b-a)
        if(fameArr.length>k) {
            fameArr.pop()
        } 
        
        answer.push(fameArr[fameArr.length-1])
    }
    return answer
}