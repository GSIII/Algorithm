function solution(numbers) {
    let numToStr = numbers.map(number=>number.toString())
    numToStr.sort((a,b)=>(b+a)-(a+b))
    return numToStr[0]==='0' ? '0' : numToStr.join('')
}