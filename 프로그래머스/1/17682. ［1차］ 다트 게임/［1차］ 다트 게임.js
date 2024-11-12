function solution(dartResult) {
    let scores = [];
    let i = 0;
    while(i<dartResult.length) {
        let score = 0;
        if (dartResult[i]==='1' && dartResult[i+1]==='0') {
            score = 10
            i+=2
        } else {
            score = Number(dartResult[i])
            i++
        }
        
        let bonus = dartResult[i]
        i++
        
        if (bonus==='S') {
            score = Math.pow(score,1)
        } else if (bonus==='D') {
            score = Math.pow(score,2)
        } else if (bonus==='T') {
            score = Math.pow(score,3)
        }
        
        let option = ''
        if (dartResult[i]==='*' || dartResult[i]==='#') {
            option = dartResult[i]
            i++
        }
        
        if (option==='*') {
            score*=2
            if (scores.length>0) {
                scores[scores.length-1]*=2
            }
        } else if (option==='#') {
            score *= -1
        }
        
        scores.push(score)
    }
    
    return scores.reduce((a,b)=>a+b,0)
}