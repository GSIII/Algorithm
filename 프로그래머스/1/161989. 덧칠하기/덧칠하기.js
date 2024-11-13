function solution(n, m, section) {
    let answer = 0;
    let lastCovered = 0;
    for (let i=0;i<section.length;i++) {
        if (lastCovered<section[i]) {
            answer++
            lastCovered = section[i]+m-1
        }
    }
    return answer
}