function solution(x) {
    let arr = x.toString().split('').map(num=>+num)
    let sum = 0;
    for (let num of arr) {
        sum += num
    }
    return x%sum===0 ? true : false
}