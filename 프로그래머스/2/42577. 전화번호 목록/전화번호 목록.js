function solution(phone_book) {
    phone_book.sort();
    for (let i=0;i<phone_book.length-1;i++) {
        // i+1번째를 비교하고 있으므로 phone_book.length로 for문 길이 설정을 하면 참조할 값이 없어서 에러가 발생한다!
        if (phone_book[i+1].startsWith(phone_book[i])){
            return false
        }
    }
    return true
}