function solution(arr1, arr2) {
    return arr1.map((nums,idx1)=>{
        return nums.map((num,idx2)=>{
            return num+arr2[idx1][idx2]
        })
    })
}
