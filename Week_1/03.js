//2. 문자 : String(문자열 = 문자의 나열)
// '' = ""
let str = "Hello World";
console.log(str);
console.log(typeof str); //String

// 2-1. 문자열 길이 확인
console.log(str.length); //11
console.log(typeof str.length); //number


//2-2. 문자열 결합(concatenation)
let str1 = "Hello, ";
let str2 = "World";
let result = str1.concat(str2);
console.log(result);

//2-3. 문자열 자르기(substring)
let str3 = "hello, world"
console.log(str3.substr(7,5)); //(시작지점,몇칸갈지)world 
console.log(str3.slice(7,12)); // (시작지점, 끝난지점)

//2-4. 문자열 검색(search)
let str4 = "Hello, World1";
console.log(str4.search("World")); // 결과 : 7 (World가 시작되는 지점)

//2-5. 문자열 대체(replace)
let str5 = "Hello, World!";
let result2 = str5.replace("World", "Javascript");
console.log(result2);


//2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result3 = str6.split(","); // 괄호안에 분할자(splitter)
console.log(result3); // 배열 형태로 저장됨
console.log(typeof result3); //object


