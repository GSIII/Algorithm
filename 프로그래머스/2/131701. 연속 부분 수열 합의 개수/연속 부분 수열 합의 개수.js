function solution(elements) {
    let extendEl = elements.concat(elements); 
    
    let elementSet = new Set()
    
    for (let n=1; n<=elements.length;n++) {
        for (let start=0;start<elements.length;start++) {
            let sum = 0;
            for (let i=0;i<n;i++){
                sum += extendEl[start+i]
            }
            elementSet.add(sum)
        }
    }
    return elementSet.size
}