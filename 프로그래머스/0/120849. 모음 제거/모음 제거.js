function solution(my_string) {
    let arr = ['a','e','i','o','u'];
    return my_string.split('').filter(char=>!arr.includes(char)).join('')
}