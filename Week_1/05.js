// 형 변환
// 데이터 타입을 바꾼다
// 종류 : (1) 암시적 형 변환 / (2) 명시적 형 변환

//1. 암시적 형 변환
//1-1. 문자열
// {}, null, undefined + "1" => 문자열이 된다!
let a = 1 + "2";
console.log(a); //12
console.log(typeof a); //String

let b = "1" + true;
console.log(b); //1true
console.log(typeof b); //string

//1-2. 숫자
// + 연산자가 아닌 다른 연산자(-, *)가 나왔을 때는 항상 숫자가 우선시 된다! (환장쇼!)
let c = 1 - "2";
console.log(c); //-1
console.log(typeof c); //number

let d = "2" * "3";
console.log(d); //6
console.log(typeof d); //number

//2. 명시적 형 변환
// 방법 : 어떤 타입으로 바꿀지 적고, 괄호.
//2-1. Boolean
console.log(Boolean(0)); //false - 숫자는 0과 NaN 제외 모두 true 다
console.log(Boolean(1)); //true
console.log(Boolean(2)); //true

console.log("--------------------");

console.log(Boolean("안녕하세요?")); //true - 문자열은 true 다
console.log(Boolean("")); // false - 빈 문자열은 false 다
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false

console.log("--------------------");

console.log(Boolean("false")); //true
console.log(Boolean({})); //true 빈 객체{} 는 true 다


console.log("--------------------");
// 2-2. 문자열
let e = String(123);
console.log(typeof e); //String
console.log(e);

let f = String(true);
console.log(typeof f); //String
console.log(f);


let g = String(false);
console.log(typeof g); //String
console.log(g);


let h = String(null);
console.log(typeof h); //String
console.log(h);


let i = String(undefined);
console.log(typeof i); //String
console.log(i);


console.log("--------------------");
//2-3. 숫자
let j = Number("123");
console.log(j);
console.log(typeof j); //number
