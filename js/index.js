"use strict";

// let x;
// console.log(x);
// console.log(y);
// ! FOR OF
// let nums = [10,20,30]
// for(var x of nums){
//     console.log(x);
// }

// ! ternary operator : ___ ? ___ : ____

// let age = 9;
// age < 18 ? console.log("not allowed") : console.log("welcome");

// ! spread operator : ...____

// let nums = [10, 20, 30, 40, 50];

// function getAvg(a, b, c, d, e) {
//   return (a + b + c + d + e) / nums.length;
// }

// let result = getAvg(...nums);
// console.log(result);

// let user = {
//   userName: "ahmed",
//   age: 21,
//   salay: 2200,
// };
// let admin = {
//     isAdmin: true,
//     ...user
// }
// console.log(admin);

// ! rest parametars
// function getAvg(...nums) {
//   let sum = 0;
//   for (let x of nums) {
//     sum += x;
//   }
//   return sum / nums.length;
// }

// let result = getAvg(12, 23, 34, 45, 56, 67);
// console.log(result);

// ! destructing
// ? OBJECTS
// let user = {
//   userName: "ahmed",
//   age: 21,
//   salay: 2200,
//   son: { fname: "bog", age1: 4 },
// };

// let { userName, age, salay } = user; // this means ===> let userName = user.userName  ..... and it has to be the same name as the propirity
// let { age1, fname } = user.son;
// console.log(age1);

// ? ARRAYS

// let friends = ["ahmed", "mahmoud", "saeed"];

// let [x, y, z] = friends
// console.log(x);

// ! shallow copy and deep copy, map and set

// ! this
// console.log(this); // window

// document.addEventListener("click", function () {
//   console.log(this);
// });

let user = {
  age: 21,
  name: "ahmed",
  salay: 2000,
  calcSalary: function () {
    // let that = this   // we did this cuz "this" is only defined in calcSalary() scope
    let calcTax = () => {
      // return (that.salay * 10) / 100;
      return (this.salay * 10) / 100;
    };
    return this.salay - calcTax();
  },
};
console.log(user.calcSalary());

// ! Arrow function

// let test = () => "test"; // return one line ===> we can remove "return" and "{}"
// let test = _ => "test"; // with no prameter ===> we can remove "()"
let test = (name) => "test " + name; // with one prameter ===> we can remove "()" and put the prameter
console.log(test("aaaaah"));
