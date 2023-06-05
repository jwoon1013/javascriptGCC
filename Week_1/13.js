// 1. 조건부 실행
let x = 10;

// 아래 두 경우는 같다
x > 0 && console.log("x는 양수이다"); // <- 요즘 스러운 작성 패턴!

if (x > 0) {
    console.log("x는 양수이다");
}

// 2. 삼항연산자와 단축평가
let y; // y 는 값을 할당 안했으므로, undefined
let z = y || 20; // y가 undefined 라면, 20을 할당해줘.
console.log(y); // undefined
console.log(z); // 20
