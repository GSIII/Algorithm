function solution(s) {
    let transformations = 0;  // 이진 변환의 횟수
    let removedZeros = 0;  // 제거된 0의 개수
    
    while (s!=='1') {
        let zeroCount = s.split('0').length-1
        removedZeros += zeroCount;
        
        s = s.replace(/0/g,'');
        let sLength = s.length;
        
        s = sLength.toString(2)
        transformations++
    }
    return [transformations,removedZeros]
}