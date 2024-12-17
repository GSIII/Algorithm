/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i=0;i<num.length;i++) {
        if (i%2) {
            oddSum += +num[i]
            console.log(oddSum)
        } else {
            evenSum += +num[i]
            console.log(evenSum)
        }
    }
    return evenSum===oddSum ? true : false
};