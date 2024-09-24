function solution(s){
    let count_p = 0;
    let count_y = 0;
    for (let i=0;i<s.length;i++) {
        if (s[i]==='y'||s[i]==='Y') {
            count_y++
        } else if (s[i]==='p' || s[i]==='P') {
            count_p++
        }
    }
    if (count_y===count_p) {
        return true
    } else {
        return false
    }
}