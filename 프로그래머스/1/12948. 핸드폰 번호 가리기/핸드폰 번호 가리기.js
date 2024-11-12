function solution(phone_number) {
    let restNumber = phone_number.substring(phone_number.length-4)
    let replace = ''
    for (let i=0;i<phone_number.length-4;i++) {
        replace+='*'
    }
    return replace+restNumber
    

}