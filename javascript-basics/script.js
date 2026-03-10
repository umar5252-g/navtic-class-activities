// different premptive data types
// number , string, boolean, null, undefinded,
// bigint and symbol

//Premptive data types are complex values — stored as reference, mutable.
// arr, object and functions

//STORED BY VALUE VS REFRENCE
// PRIMITIVE — copy by VALUE
// let a = 10;
// let b = a;
// b = 20;
// console.log(a); //  a is unchanged
// console.log(b); // 20

// NON PRIMITIVE — copy by REFERENCE
// let obj1 = {
//   name: "fahad",
// };
// let obj2 = obj1;
// obj2 points to SAME object
// obj2.name = "umar";
// console.log(obj1.name);
// console.log(obj2.name);
// console.log("hello world");
// console.log(5 + 2);

// var name = "uamr";
// var name = "umar khan";
// console.log(name);

// document.writeln("hello world");

// const no1 = prompt("please enter your age");
// const no2 = 2;
// const no3 = 30;
// const no4 = 4;
// console.log("your age : ", Number(no1) + no2);

// console.log("no1 + no2:", no1 + no2);
// console.log("no1 + no2: " + no1 + no2);
// console.log(no1 + no2);

// console.log(no3 + no4);

// console.log(no1 <= no2 && no3 >= no4); // true
// console.log(no1 <= no2 || no3 >= no4); // true

// const user = {
//   name: "umar",
//   age: "20",
//   gender: "male",
//   year: "3rd year",
//   country: "Pakistan",
//   isStudent: true,
//   city: "Peshawar",
//   hobies: ["coding", "gaming", "reading"],
//   education: {
//     degree: "bachelor",
//     field: "computer science",
//     university: "Islamia collage",
//   },
// };

// document.writeln(
//   "User Data -->",
//   "<br> name: ",
//   user.name,
//   "<br> age: ",
//   user.age,
//   "<br> gender: ",
//   user.gender,
//   "<br> year: ",
//   user.year,
//   "<br> country: ",
//   user.country,
//   "<br> isStudent: ",
//   user.isStudent,
// );

// console.log(
//   "user data -->",

//   "\n name: ",
//   user.name,
//   "\n age: ",
//   user.age,
// );
// (console.log(user), console.log(user.name));
// console.log(user.age);
// console.log(user.isStudent);
// console.log(user.hobies[1]);
// console.log(user.education.university);

// while (num <= 50) {
//   if (num % 5 == 0) {
//     console.log(num, " is divisable by 5");
//     num++;
//   } else {
//     num++;
//   }
// }
// do {
//   console.log("hi my name is umar");
// } while (num < 1);

// let count = 0;
// while (num > 0) {
//   num = Math.floor(num / 10);
//   count++;
// }
// console.log(count);

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// let res = 0;

// while (res <= 100) {
//   let num = Number(prompt("enter a number"));
//   res += num;
// }

// console.log("sum exeeded from 100");

// let str = "my name is umar";
// let arr = str.split("");
// let st = 0;
// let end = arr.length - 1;
// while (st < end) {
//   let temp = str[st];
//   arr[st] = str[end];
//   arr[end] = temp;
//   st++;
//   end--;
// }
// str = arr.join("");
// console.log(str);

// const addition = (a, b) => {
//   return a + b;
// };
// const sum = addition(2, 4);
// console.log(sum);

// const arrowFun = () => {
//   console.log("this is arrow function");
// };
// const addition = (num1, num2) => {
//   console.log(num1 + num2);
// };

// const defArg = (num1 = 20) => {
//   console.log(num1);
// };

// defArg;

// Array

// const arr = [1, "umar", true, undefined, null];
// console.log(arr);
// console.log(arr[0]);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const addition = (num1, num2) => {
//   return num1 + num2;
// };
// let res = addition(12, 23);
// console.log(res);

// const objFun = (student) => {
//   console.log(student.name);
// };

// objFun(student);

// let arr = [1, 2, 3, 4];
// arr.shift();
// console.log(arr);

// let student = {
//   name: "umar",
//   age: 22,
//   gender: "male",
//   marks: [35, 53, 45, 75, 70],
// };

// student.weight = "55kg";
// console.log(student.weight);

// for (let i = 0; i < student.marks.length; i++) {
//   console.log(student.marks[i]);
// }
// function originalFunction() {
//   return "Hello, world!";
// }

// const newVariable = originalFunction;

// console.log(newVariable());

// let obj1 = {
//   name: "umar",
// };

// let obj2 = obj1;
// obj2.name = "qasim";

// console.log(obj1.name);
// console.log(o

// const numbers = [1, 2, 3];

// // .map() - creates new array [2, 4, 6]
// const doubled = numbers.map((n) => n * 2);

// // .forEach() - logs 1, 2, 3 and returns undefined
// numbers.forEach((n) => console.log(n));
// let n = 2;
// function square(n) {
//   return n * n;
// }

// let squareRes = square(n);
// console.log(squareRes);

// const isEven = (num) => {
//   if (num % 2 === 0) {
//     console.log(num, " is even");
//   } else {
//     console.log(num, " is not even");
//   }
// };

// isEven(9);

// const student = ["umar", 22, "Islamia Collages", "male", [12, 3]];

// for (let i = 0; i < student.length; i++) {
//   console.log(student[i]);
// }

// function reverese(arr) {
//   let arr2 = arr.split("");
//   let st = 0;
//   let end = arr.length - 1;
//   while (st < end) {
//     let temp = arr2[st];
//     arr2[st] = arr2[end];
//     arr2[end] = temp;
//     st++;
//     end--;
//   }
//   arr = arr2.join("");
//   return arr;
// }

// let revArr = reverese("umar");

// console.log(revArr);
