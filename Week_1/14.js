// falsy 한 값 & truthy 한 값

if (0) {
    console.log("hello, 0"); // 실행안됨!
}

if ("") {
    console.log("hello ''''"); // 실행안됨!
}

if (null) {
    console("hello null"); // 실행안됨!
}
if (undefined) {
    console.log("hello undefined"); // 실행안됨!
}
if (NaN) {
    console.log("hello NaN"); // 실행안됨!
}
if (false) {
    console.log("hello false"); // 실행안됨!
}
if (true) {
    console.log("hello true"); // 이거만 실행됨
}
