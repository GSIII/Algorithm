function solution(a, b) {
    
    let daysOfWeek = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let daysInMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
    let totalDays = b - 1; 
    for (let i = 0; i < a - 1; i++) { // 1월부터 a-1월까지의 일수를 더함
        totalDays += daysInMonth[i];
    }

    return daysOfWeek[totalDays % 7]; // 요일 계산 후 결과 반환
    
}