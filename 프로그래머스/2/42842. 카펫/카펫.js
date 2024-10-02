function solution(brown, yellow) {
    let height;
    let weight;
    let total = brown + yellow
    for (let i=3; i<= total; i++) {
        if (total%i===0) {
            height = i;
            weight = total/i
            
            if ((weight+height-2)*2===brown){
                return [weight, height]
            }
        }
    }
}