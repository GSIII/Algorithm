function solution(want, number, discount) {
    let wantMap = new Map()
    let answer = 0;
    number.forEach((cnt,index)=>{
        wantMap.set(want[index],cnt)
    })
    
    for (let i=0;i<=discount.length-10;i++) {
        let newWant = new Map();
        for (let j=i;j<i+10;j++) {
            newWant.set(discount[j],(newWant.get(discount[j])||0)+1)
        }
        let isMatch = true
        for (let [key,value] of wantMap) {
            if (newWant.get(key)!==value){
                isMatch=false
                break;
            }
        }
        if (isMatch) {
            answer++
        }
    }
    return answer
}