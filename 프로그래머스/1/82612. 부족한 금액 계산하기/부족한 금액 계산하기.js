function solution(price, money, count) {
    let needMoney = [];
    for (let i=1;i<=count;i++) {
        needMoney.push(i*price)
    }
    let totalMoney = needMoney.reduce((acc,cur)=>acc+cur,0)
    return totalMoney>money ? totalMoney-money : 0
}