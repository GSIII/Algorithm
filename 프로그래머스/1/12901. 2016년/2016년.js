function solution(a, b) {
    let daysOfWeek = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let daysInMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
    
    let totalDay = b-1
    for (let i=0;i<a-1;i++) {
        totalDay += daysInMonth[i]
    }
    return daysOfWeek[totalDay%7]
}