// 실행 : 터미널에서 node 파일명

// 변수, 상수
// 변수 = 기억하고 싶은 값을 메모리에 저장한다. 읽어들여서 재사용한다.

// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위 (var myVar)
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

// 변수 선언하는 3가지 방법 : var , let , const
// 1. var (재선언 가능 / 재할당 가능)
var myVar = "Hello World";
var myVar = "Test 1"
myVar = "GoodBye"
console.log(myVar);

// 2. let (재선언 불가 / 재할당 가능)
let myLet = "Hello World2";
// let myLet = "Test 2" <- 오류 발생
myLet = "GoodBye 2"
console.log(myLet);

// 3. const (재선언 불가 / 재할당 불가)
const myConst = "Hello World3"
// const myConst = "Test 2" <- 오류 발생
// myConst = "GoodBye 3"  <- 오류 발생
console.log(myConst);

// 변수 선언과 할당은 합쳐서 쓸 수도, 따로 쓸 수도 있다
// var myVar1 = 3; 과 같다.
var myVar1;
myVar1 = 3;
