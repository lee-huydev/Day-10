//! HW 1
// let person = {
//    name: 'Bob',
//    occupation: 'Web Developer',
//    hobbies: 'Painting',
// };
// console.log(person.name);
// console.log(person['occupation']);
// let { hobbies } = person;
// console.log(hobbies);

//! HW2
// let obj = {
//    b: 2,
//    a: 1,
//    c: 3,
// };
// let myArr = Object.keys(obj);
// let outPut = myArr.map(function (element) {
//    return element.toUpperCase();
// });
// console.log(outPut);
//! HW3
// function myFamily() {
//    this.quantity = 4;
//    this.member = ['Dad', 'Mom', 'Me', 'Daughter'];
//    this.location = 'Vietnam';
// }

// var family = new myFamily();
// console.log(family);

//! HW4
let obj = {
   foo: { a: 'hello', b: 'world' },
   bar: ['example', 'mem', null, { xyz: 6 }, 88],
   qux: [4, 8, 12],
};
// 1
// obj.bar[3].xyz = 606;
// console.log(obj);
// 2
let change = (key, value) => {
   for (let keyObj in obj) {
      if (keyObj == 'bar') {
         for (let i in obj[keyObj]) {
            if (
               !Array.isArray(obj[keyObj][i]) &&
               typeof obj[keyObj][i] != 'string' &&
               typeof obj[keyObj][i] != 'number' &&
               obj[keyObj][i] != null
            ) {
               obj[keyObj][i][key] = value;
            }
         }
      }
   }
};
change('xyz', 606);
console.log(obj);
