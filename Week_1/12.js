//조건문의 중첩
let age = 20;
let gender = "여성";

// 중첩문을 많이 쓰는 것은 좋지 않음 (코드 가독성 떨어져!)

if (age >= 18) {
    if (gender === "여성") {
        console.log("성인 여성입니다");
    } else {
        console.log("성인 남성입니다.");
    }
} else {
    if (gender === "여성") {
        console.log("미성년 여성입니다");
    } else {
        console.log("미성년 남성입니다.");
    }
}
