// 1. 불리언(Boolean)
// true, false
let bol1 = true;
let bol2 = false;

console.log(bol1);
console.log(typeof bol1);

console.log(bol2);
console.log(typeof bol2); //boolean
// if (boolean 타입) {  }



// 2. undefined (값이 할당되지 않은 변수)
let x; //선언만 하고, 값을 할당하지 않은 변수 x
console.log(x); // undefined = 값이 할당이 안됐네!
console.log(typeof x); //undefined



// 3. null : 값이 존재하지 않음을 "명시적"으로 나타내는 방법 (= 값이없단걸 표현하기 위해)
// undefined 와 null의 차이점은?
// undefined = 값이 없다!(사고다!)
// null = 개발자가 의도적으로 값이 없음을 나타내기 위해 쓰는 값!(의도다!)

let y = null;
console.log(y); // null

//4. object(객체) : key: value 페어 {} 중괄호 사용
let person = {
    name : 'woon',
    age : '20',
    isMarried: false
};

console.log(person);
console.log(typeof person); //object



//5. array(배열) : [] 대괄호 사용
// 여러개의 데이터를 "순서대로" 저장하는 데이터 타입! = index를 지님
let num = [1, 2, 3, 4, 5];
console.log(num); 
console.log(typeof num); // object