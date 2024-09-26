function solution(arr)
{
    let answer = arr.filter((el,i)=>{
        return el!==arr[i+1]
    })
    return answer
}