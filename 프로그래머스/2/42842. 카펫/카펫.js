function solution(brown, yellow) {
    let width;
    let height;
    let total = brown+yellow
    for (height=3;height<=total;height++) {
        if (total%height===0){
            width = total/height;
            if ((width+height-2)*2===brown) {
                return [width,height]
            }
        }
    }
}