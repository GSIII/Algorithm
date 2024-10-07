function solution(n, words) {
    let usedWords = new Set();
    
    usedWords.add(words[0])
    
    for (let i=1;i<=words.length-1;i++) {
        let currentWord = words[i];
        let previousWord = words[i-1];
        if (previousWord[previousWord.length-1]!==currentWord[0] || usedWords.has(currentWord)) {
            let person = (i%n)+1;
            let turn = Math.floor(i/n)+1
            return [person,turn]
        }
        usedWords.add(currentWord)
    }
    return [0,0]
}