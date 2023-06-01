// 연산자 (+, -, *, /, %)

//1. + 연산자
// + 는 우선순위가 문자열에 있음!
console.log(1 + 1); // number 2
console.log(1 + "1"); //String 11

//2. - 연산자
console.log(1 - "2"); // -1
console.log(1 - 2); // -1

// 3. * 연산자
console.log(2 * 3); //6
console.log("2" * 3);// 6

// 4. / 연산자
console.log( 4 / 2); // 2
console.log( 4 / "2"); // 2


// 5. % 연산자
console.log(5 % 3); // 2
console.log("5" % 3 ); // 2



//6. 할당 연산자 (assignment)
//6-1. 등호 연산자 (=)
let x = 10;
console.log(x);

//6-2. 더하기 등호 연산자 (+=)
x += 5;
console.log(x);


//6-3. 빼기 등호 연산자
x -= 2;
console.log(x);

//6-3. 곱하기 등호 연산자 (*=)
let a = 10;
a *= 2;
console.log(a);


//7. 비교 연산자 (true 혹은 false 를 반환하는 연산자 /  사용빈도가 매우 높아! )
// 7-1. 일치 연산자 (===)
// 타입까지 일치해야 true를 반환
console.log(2 === 2); //true
console.log("2" === 2); //false

//7-2. 불일치 연산자(!==)
//타입까지 일치해야 false를 반환 ("2가 2와 다르니?")
console.log(2 !== 2 ); //false
console.log("2" !== 2); //true

// 7-3. 작다 연산자(<), 작거나같다 연산자(<=)
console.log(2 < 3); //true
console.log(2 <= 3); //true


//8. 논리 연산자
//8-1. 논리곱 연산자 (&&) : 모두 true일 때 true를 변환 
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//8-2. 논리합 연산자 (||) : 두 값중 하나라도 true면 true다

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//8-3. 논리 부정 연산자 (!) : 값을 반대로 바꿔줌
console.log(!true); //false
console.log(!false); //true


//9. 삼항 연산자 (자주씀! 중요!)
// 조건에 따라 값을 선택한다
let k = 10;
let result = (k > 5) ? "크다" : "작다";
console.log(result); // 크다