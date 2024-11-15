function solution(s) {
    return s.split(' ').map((str)=>{
        return str.split('').map((char,index)=>{
            return index%2===0?char.toUpperCase():char.toLowerCase()
        }).join('')
    }).join(' ')
}