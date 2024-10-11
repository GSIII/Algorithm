function solution(nums) {
    let length = Math.floor(nums.length/2)
    let numSet = new Set([...nums])
    if (numSet.size > length) {
        return length
    } else if (numSet.size===length) {
        return length
    } else if (numSet.size < length) {
        return numSet.size
    }
}