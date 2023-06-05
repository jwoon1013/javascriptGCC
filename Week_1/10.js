// 스코프, 전역변수, 지역변수 , 화살표 함수
// 스코프(Scope)? 변수의 영향 범위

// 화살표 함수
// ES6 부터 등장한 신 문법
// 기존에는 함수를 선언하려면 function 밖에 없었지만,
// 화살표 함수의 등장으로 새로운 선언 방법이 생겼다!

// 일단 function 으로 함수 선언하는게 충분히 익숙해진 다음에 화살표함수 사용할것

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
  return x + y;
};

// 1-2 . 한줄로도 가능
// 로직이 한줄이고 return 문이면 {} 는 생략 가능
let arrowFunc02 = (x, y) => x + y;

// 아래 두개 함수는 같다.
function testFunc(x) {
  return x;
}

let arrowTestFunc = (x) => x;
