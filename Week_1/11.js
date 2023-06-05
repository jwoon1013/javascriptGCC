// 조건문 if, else, else if, switch

// 1. if 문
//if (true 또는 false가 나올 수 있는 조건) {}
let x = 10;

if (x > 0) {
    console.log("x 는 양수입니다");
}

// 예시 문제 : y의 길이가 10보다 길면 cl로 출력하는 함수 만들기
let y = "hello world";

if (y.length > 10) {
    console.log(y);
}

//2. if - else 문
if (x > 0) {
    console.log("x는 양수다");
} else {
    console.log("x는 양수가 아니다");
}

// 3. if - else if - else 문

if (x > 0) {
    console.log("x는 양수다");
} else if ((x = 0)) {
    console.log("x는 0이다");
} else {
    console.log("x는 음수다");
}

// 4. switch
//변수의 값에 따라, 여러 경우(case) 중 하나를 선택
let fruit = "사과";

switch (fruit) {
    case "사과":
        console.log("사과입니다");
        break;
    case "바나나":
        console.log("바나나 입니다");
        break;
    default:
        console.log("모르는 과일 입니다");
        break;
}
