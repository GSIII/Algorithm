function solution(nums) {
    let chooseNum = Math.floor(nums.length/2)
    let set = new Set()
    nums.forEach(num=>{
        set.add(num)
    })
    if (chooseNum>set.size) {
        return set.size
    } else {
        return chooseNum
    }
}