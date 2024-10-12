function solution(n, arr1, arr2) {
    let arr = [];
    for (let i=0;i<n;i++) {
        let digit = (arr1[i]|arr2[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g, '#')
        arr.push(digit)
    }
    return arr
}