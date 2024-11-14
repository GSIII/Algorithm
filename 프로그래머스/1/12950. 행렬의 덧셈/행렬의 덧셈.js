function solution(arr1, arr2) {
    return arr1.map((num1,index1)=>{
        return num1.map((num2,index2)=>{
            return num2+arr2[index1][index2]
        })
    })
}