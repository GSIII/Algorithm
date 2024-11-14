function solution(want, number, discount) {
    let wantMap = new Map();
    let answer = 0;
    want.forEach((item,index)=>{
        wantMap.set(item,number[index])
    })

    for (let i=0;i<=discount.length-10;i++) {
        let dMap = new Map();
        for (let j=i;j<i+10;j++) {
            dMap.set(discount[j],(dMap.get(discount[j])||0)+1)
        }
        let isMatch = true;
        for (let [key,value] of wantMap) {
            if (dMap.get(key)!==value) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            answer++
        }
    }
    return answer
}