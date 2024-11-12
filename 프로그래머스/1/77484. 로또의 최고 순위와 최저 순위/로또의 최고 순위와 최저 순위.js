function solution(lottos, win_nums) {
    const winTable = {
        6:1,
        5:2,
        4:3,
        3:4,
        2:5,
        1:6,
        0:6
    }
    let zeroCount = lottos.filter(lotto=>lotto===0).length;
    let winCount = lottos.filter(lotto=>win_nums.includes(lotto)).length
    return [winTable[zeroCount+winCount],winTable[winCount]]
}