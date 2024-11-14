function solution(phone_number) {
    let replace = ''
    const restNum = phone_number.substring(phone_number.length-4);
    for (let i=0;i<phone_number.length-4;i++) {
        replace += '*'
    }
    return replace+restNum
}