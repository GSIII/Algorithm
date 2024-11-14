function solution(d, budget) {
    let money = 0;
    let answer = 0;
    d.sort((a,b)=>a-b)
    for (let price of d) {
        money += price
        if (money>budget){
            break;
        } else {
            answer++
        }
    }
    return answer
}
