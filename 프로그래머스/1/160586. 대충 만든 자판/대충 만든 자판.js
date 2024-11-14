function solution(keymap, targets) {
    let minPress = {}
    keymap.forEach((key)=>{
        for (let i=0;i<key.length;i++) {
            let char = key[i];
            if (!minPress[char] || minPress[char]>i+1) {
                minPress[char] = i+1
            }
        }
    })
    return targets.map((target)=>{
        let press = 0;
        for (let i=0;i<target.length;i++) {
            if (!minPress[target[i]]) return -1
            
            press += minPress[target[i]]
        }
        return press
    })
    
}