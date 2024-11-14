function solution(s) {
    return s.split(' ').map((el)=>{
        return [...el].map((char,index)=>{
            return index%2===0?char.toUpperCase():char.toLowerCase()
        }).join('')
    }).join(' ')
}