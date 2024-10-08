function solution(n, words) {
    let newWords = new Set();
    
    newWords.add(words[0]);
    
    for (let i=1;i<words.length;i++) {
        let currentWord = words[i]
        let previousWord = words[i-1];
        if (currentWord[0]!==previousWord[previousWord.length-1] || newWords.has(currentWord)) {
            let person = (i%n) +1;
            let turn = Math.floor(i/n)+1
            return [person,turn]
        }
        newWords.add(currentWord)
    }
    return [0,0]
}