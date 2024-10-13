function solution(s) {
    let deleteZero = 0;
    let afterDelete = 0;
    let sumDelete = 0
    let count = 0
    while (s!=='1') {
        deleteZero = s.split('0').length-1;
        afterDelete = s.length-deleteZero;
        s = afterDelete.toString(2)
        count++
        sumDelete += deleteZero
        
    }
    return [count,sumDelete]
}