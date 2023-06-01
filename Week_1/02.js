// 데이터 타입
// 데이터 타입은 run time 에 결정된다!
// 즉, 코드를 작성할 때가 아니라, 실제 코드가 실행될 때 데이터타입이 결정된다!

//1. 숫자
//1-1. 정수
let num1 = 10;
console.log(num1);
console.log(typeof num1); //타입 출력 number

//1-2. 실수(float)
let num2 = 3.14;
console.log(num2);
console.log(typeof num2); // 타입출력 number (실수형도 number임!)


// 1-3. 지수형(Exp)
let num3 = 2.5e5; // 2.5 x 10^5
console.log(num3);
console.log(typeof num3);

// 1-4. NaN (not a number 숫자가 아닌 값)
let num4= "Hello" /2;
console.log(num4); // 결과 NaN = Not a number 의 약자
console.log(typeof num4);

// 1-5. infinity
let num5 = 1/0;
console.log(num5); //infinity
console.log(typeof num5); 
let num6 = -1/0; //number
console.log(num6); //-infinity
console.log(typeof num6); //number


