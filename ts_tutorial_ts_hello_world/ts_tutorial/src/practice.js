"use strict";
//npx tsc トランスパいる
let greet;
greet = "Hello";
console.log(greet);
const isWeekday = (dayOfWeek) => {
    return dayOfWeek !== "Sun" && dayOfWeek !== "Sat";
};
console.log(isWeekday("Mon")); // true
console.log(isWeekday("Sun")); // エラー
const showUserOptions = (options) => {
    console.log(`User: name: ${options.name}, age: ${options.age}`);
};
showUserOptions({ name: 'Ken the Ninja', age: 20 });
