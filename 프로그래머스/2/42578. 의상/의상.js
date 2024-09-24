function solution(clothes) {
    // 의상 종류별로 개수를 저장할 객체 생성
    let clothMap = new Map();
    
    // 각 의상을 종류별로 분류
     clothes.forEach(([name,type])=>{
         // 종류별로 구분 후 각 종류의 개수를 셈
         clothMap.set(type,(clothMap.get(type)||0)+1)
    });
    
    // 모든 의상 종류별로 (의상수 +1)을 곱함
    let answer = 1;
    clothMap.forEach(count=>{
        answer *= (count+1) // +1 하는 이유는 아무것도 선택하지 않는 경우 포함
    })
    
    // 아무 의상도 입지 않는 경우를 제외하고 결과 반환
    return answer-1;
    
}