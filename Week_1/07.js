// 함수 = function (기능)
// input, output 

// function () {} <- 함수의 기본 골격 ( 꼭 알아두기 )

// 1. 함수 선언문
// function add (매개변수){
    // 함수 내부에서 실행할 로직 
// }

// ex) 두개의 수를 입력 받아서 덧셈을 해서 내보내는 함수 만들기
function add (x, y){
    return x + y;
}

// 2. 함수 표현식 
let add2 = function (x,y){
    return x + y;
}

//  함수를 호출한다 = 사용한다
console.log(add(1,3));
console.log(add2(3,5));

let functionResult = add(3,4);
console.log(functionResult);