function solution(today, terms, privacies) {
    let answer = [];
    const dateToDays=(today)=>{
        const [year,month,date] = today.split('.').map(Number);
        return year*12*28 + month*28 + date
    }
    
    
    let termMap = {}
    terms.forEach((term)=>{
        let [type,duration] = term.split(' ')
        termMap[type]=Number(duration)*28
    })
    
    privacies.forEach((privacy,index)=>{
        let [date,type] = privacy.split(' ');
        let dueDate = dateToDays(date)+termMap[type]-1
        
        if(dueDate<dateToDays(today)) {
            answer.push(index+1)
        }
    })
    
    return answer
}