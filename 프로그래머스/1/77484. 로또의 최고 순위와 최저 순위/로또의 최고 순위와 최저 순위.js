function solution(lottos, win_nums) {
    const ranking = {
        6:1,
        5:2,
        4:3,
        3:4,
        2:5,
        0:6,
        1:6
    };
    let zeroCount = lottos.filter(num => num === 0).length; 
    let matchCount = lottos.filter(num => win_nums.includes(num)).length; 

    let bestWin = matchCount + zeroCount; 
    
    let worstWin = matchCount;

    return [ranking[bestWin], ranking[worstWin]];

   
}