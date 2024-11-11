function solution(n, m, section) {
    let result = 0;
    let lastCovered = 0;
    for (let i=0;i<section.length;i++) {
        if (section[i]>lastCovered) {
            result++
            lastCovered = section[i] + m - 1;
        }
    }
    return result
}