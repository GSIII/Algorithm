function solution(array) {
    array.sort((a,b)=>a-b);
    let midIdx = Math.floor((array.length-1)/2)
    return array[midIdx]
}