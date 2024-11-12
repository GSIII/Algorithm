function solution(n) {
    let watermelon = '수박';
    let su = '수'
    if (n%2===0) {
        return watermelon.repeat(n/2)
    } else {
        return watermelon.repeat(n/2)+su
    }
}