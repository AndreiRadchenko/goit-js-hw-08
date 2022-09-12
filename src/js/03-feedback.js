import losalStorage from './storage';

let num = 5;
const bool = true;
const str = 'my string';
let arr = [1, 2, 3, 4, 5];
const nullVar = null;
let obj = {
  num: 5,
  bool: false,
  str: 'my second string',
  arr: ['a', 'b', 'c'],
  nullVar: null,
};

losalStorage.save('object', obj);

let jsonNum = JSON.stringify(num);
console.log(typeof jsonNum);
console.log(jsonNum);
num = JSON.parse(jsonNum);
console.log(typeof num);
console.log(num);

let jsonArr = JSON.stringify(arr);
console.log(typeof jsonArr);
console.log(jsonArr);
arr = JSON.parse(jsonArr);
console.log(typeof arr);
console.log(arr);

let jsonObj = JSON.stringify(obj);
console.log(typeof jsonObj);
console.log(jsonObj);
obj = JSON.parse(jsonObj);
console.log(typeof obj);
console.log(obj);

// console.log(JSON.stringify(bool));
// console.log(JSON.stringify(str));
// console.log(str);
