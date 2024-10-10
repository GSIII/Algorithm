function solution(s) {
    let arr = s.split('')
    const isValid = (arr) =>{
        let stack = [];
        for (let i=0;i<arr.length;i++) {
            if (arr[i]==='['||arr[i]==='{'||arr[i]==='(') {
                stack.push(arr[i])
            } else {
                if (stack.length===0) return false;
                
                let popEl = stack.pop();
                
                if ((arr[i]===']'&&popEl!=='[') 
                    ||(arr[i]==='}'&&popEl!=='{') 
                    ||(arr[i]===')'&&popEl!=='(')) {
                    return false 
                }
            }
        }
        return stack.length===0
    }
    
    let count = 0;
    for (let i=0;i<s.length;i++) {
        let rotateArr = arr.slice(i).concat(arr.slice(0,i))
        if (isValid(rotateArr)) {
            count++
        }
    }
    return count
}