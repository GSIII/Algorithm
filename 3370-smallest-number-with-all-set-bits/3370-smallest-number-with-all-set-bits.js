/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    const allHasBits = (num) =>{
        return (num&(num+1)) === 0
    }
    
    let x = n
    while(!allHasBits(x)) {
        x++
    }
    return x
};