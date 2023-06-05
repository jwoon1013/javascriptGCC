// 스코프, 전역변수, 지역변수 , 화살표 함수
// 스코프(Scope)? 변수의 영향 범위

// 지역변수 예시
function printX() {
    let x = 10; // 지역변수 - {} 안에서만 살아있음
    console.log(x);
    
}

// console.log(x); <<- 오류 발생! ReferenceError: x is not defined
printX();
