function solution(s) {
    let countDigit = 0;
    let countRemove = 0;
    while(s !== '1') {
        let countZero = s.split('0').length-1;
        countRemove += countZero
        
        s = (s.length-countZero).toString(2)
        countDigit++
    }
    return [countDigit,countRemove]
}