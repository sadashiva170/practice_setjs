console.log("2"+"3")//"23"
console.log("2"+1)//"21"
console.log(2+"1")//"21"
console.log("hi "+2+4)// hi 24
//string manupulations"
//1
const text = "Hello";
const character = text.charAt(1); // Returns "e"

const str1 = "Hello";
const str2 = "World";
const result = str1.concat(", ", str2); // Returns "Hello, World"

const text1 = "Hello, World!";
const hasWorld = text1.includes("World"); // Returns true

const text2 = "Hello, World!";
const index = text2.indexOf("World"); // Returns 7

const text3 = "Hello";
const length = text3.length; // Returns 5

const str = "abc";
const repeated = str.repeat(3); // Returns "abcabcabc"

const text4 = "Hello, World!";
const newText = text4.replace("World", "Universe"); // Returns "Hello, Universe!"

const text5 = "Hello, World!";
const position = text5.search(/World/); // Returns 7

const text6 = "Hello, World!";
const sliced = text6.slice(7, 12); // Returns "World"(start,end)

const fruits = "apple,banana,kiwi";
const fruitArray = fruits.split(",");
// Returns ["apple", "banana", "kiwi"]

// The following example shows adding a key/value pair to localStorage, retrieving it, and removing it.

localStorage.setItem('dataKey', 'dataValue');
const data = localStorage.getItem('dataKey');
console.log(data);
localStorage.removeItem('dataKey');

//object
const person = {
  firstName: 'Elizabeth',
  lastName: 'Harmon',
  age: 22,
  eyeColor: 'Hazel',
  greeting: function () {
    return `Hi, I am ${this.firstName} ${this.lastName}.`;
  },
};

console.log(person.greeting())

//largest of 3 numbers
let p=3390;
let q=4599;
let r=384;
let d;
// console.log(Math.max(a,b,c))
if(p>q && p>r){
    d=p
}
else if(q>p && r<q){
    d=q
}
else{
    d=r
}
console.log(d)

//loops
//1 while loop
let j = 0;

while (j < 5) {
  console.log(i);
  j++;
}//01234

//2 do while
let x = 0;
let z = 0;

do {
  x = x + z;
  console.log(x);
  z++;
} while (z < 5);// 0 1 3 6 10

//3for
for (let i = 0; i < 4; i += 1) {
  console.log(i);
}// 0 1 2 3

//for of loop

const items = ['apple', 'banana', 'cherry'];

for (const item of items) {
  console.log(item);
}//apple banana cherry

//for in 

const shoppingCart = { banana: 2, apple: 5, cherry: 0 };

for (const fruit in shoppingCart) {
  console.log(fruit);
  console.log(shoppingCart[fruit]);//2,5,0
}// banana apple cherry

//reverse loop

const items1 = ['apricot', 'banana', 'cherry'];

for (let i = items1.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items1[i]}`);
}
//output
// 2. cherry
// 1. banana
// 0. apricot

//Looping Through Arrays
const fish = ['salmon', 'clown', 'whiting'];

for (let i = 0; i < fish.length; i++) {
  console.log(fish[i]);
}
// output
// salmon
// clown
// whiting

//Looping Through Objects
const objectK = {
  name: 'Codecademy',
  age: 10,
};

const myEntries = Object.entries(objectK);

console.log(myEntries);// [ [ 'name', 'Codecademy' ], [ 'age', 10 ] ]

for (const [key, value] of myEntries) {
  console.log(`${key}: ${value}`);//name: Codecademy, age: 10
}

//Break Keyword
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
    break;
  }
  console.log(i);// 0 1 2 3 4 5 
}

//even or odd
var b = 2;
if (b == 1) {
    console.log(`${b} is neither a prime number nor a composite number`);
} else if (b < 0) {
    console.log(`${b} is not a prime number`);
} else {
    let isPrime = true;
    for (let i = 2; i < b; i++) {
        if (b % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${b} is a prime number`);
    } else {
        console.log(`${b} is not a prime number`);
    }
}



//Nested For Loop -The inner loop will run all its iterations for each iteration of the outer loop.
for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);//
  }
}
// output
// 0-0
// 0-1
// 0-2
// 1-0
// 1-1
// 1-2

//hoisting: Hoisting in JavaScript is a mechanism that allows variable and function declarations to be moved to the top of their containing scope during the compilation phase. This means that, in JavaScript, you can use a variable or function before it's declared in your code

console.log(h); // Outputs 'undefined'
var h = 5;
console.log(h)//5

sayHello(); // Outputs 'Hello, world!'

function sayHello() {
    console.log('Hello, world!');
}

console.log(y); // Throws a ReferenceError
let y = 10;

sayHello(); // Throws a TypeError

var sayHello = function() {
    console.log('Hello, world!');
};


//closure:A closure is a fundamental concept in JavaScript that refers to the ability of a function to maintain access to variables from its containing (enclosing) lexical scope even after that scope has finished executing. In simpler terms, a closure allows a function to "remember" and access variables from the scope where it was created, even if that outer scope is no longer in the call stack.
function outer() {
  let outerVar = "I am from outer!";

  function inner() {
      console.log(outerVar); // Accesses outerVar from the outer function's scope
  }

  return inner; // Returns the inner function
}

const closureFunction = outer(); // Calling outer() creates a closureFunction
closureFunction(); // Calls the inner function and logs "I am from outer!"

function createCounter() {
  let count = 0;

  return function() {
      count++;
      console.log(count);
  };
}

const counter = createCounter();//The createCounter function returns another function, and you need to assign that returned function to a variable in order to execute it.
counter(); // Logs 1
counter(); // Logs 2


//Array manupulations

const colors = ["red", "green", "blue"];
const color = colors.at(1); // "green"

const fruits1 = ["apple", "banana"];
const fruits2 = ["orange", "kiwi"];
const mergedFruits = fruits1.concat(fruits2); // ["apple", "banana", "orange", "kiwi"]

const numbers1 = [1, 2, 3, 4, 5];
numbers1.copyWithin(0, 3, 4); // [4, 2, 3, 4, 5]   (target,start,end) Returns a mutated array with part of it copied to another location in the same array, and its length unchanged.

function isEqual(a, b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }
  //without if and else
  function isEqual(a, b) {
    return a === b;
  }
  //2
  function isLess(a, b) {
    // Only change code below this line
    if (a < b) {
      return true;
    } else {
      return false;
    }
    // Only change code above this line
  }
  
  isLess(10, 15);

  //without if and else

  function isLess(a, b) {
    // Only change code below this line
  return a<b;
    // Only change code above this line
  }
  
  isLess(10, 15);


  //3
  const myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  
  const prop1val = myObj.prop1;
  const prop2val = myObj.prop2;

  //4
  const myObj1 = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  
  myObj1["Space Name"];
  myObj1['More Space'];
  myObj1["NoSpace"];

  //5
  const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
  };
  
  delete ourDog.bark;

  //6
  // Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");


  //converting to object by assigning to the result
  // Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
  const lookup= {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie":"Chicago",
      "delta": "Denver",
      "echo":"Easy",
      "foxtrot":"Frank",
    }
     result = lookup[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");


  //7 To check if a property on a given object exists or not, 

  function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
  }
  
  checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
  checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
 
  //8while loop
  const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

//9 for loop

const ourArray1 = [];

for (let i = 0; i < 5; i++) {
  ourArray1.push(i);
}

//10 total of  array elements

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

//11array loop  123456 output
const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }

//12 array multiply output 5040

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for(let i=0;i<arr.length;i++){
    for( let j=0;j<arr[i].length;j++){
      product*=arr[i][j]
    }
  }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//13 The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");

//solution:
  function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
      if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
//outputs
// lookUpProfile("Kristian", "lastName") should return the string Vos
// Passed:lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
// Passed:lookUpProfile("Harry", "likes") should return an array
// Passed:lookUpProfile("Bob", "number") should return the string No such contact
// Passed:lookUpProfile("Bob", "potato") should return the string No such contact
// Passed:lookUpProfile("Akira", "address") should return the string No such property

//14  multiplied the result of Math.random by 10 to make it a number in the range from zero to nine.
Math.floor(Math.random()*11);

//15randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax.
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  //16  converts the input string str into an integer
  const a = parseInt("007");//7

  //17 The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.
  const b = parseInt("11", 2);//(string,radix)

  //18 countdown(-1) should return an empty array.
// countdown(10) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);//for push [1,2,3,4,5,6,7,8,9,10]
      return arr;
    }
  }
  

  //19 splice
  let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
//newArray has the value ['really', 'happy'].
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

//20slice
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

//output ['snow', 'sleet']

//21 output copyMachine([1, 2, 3], 5) should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
newArr.push([...arr])
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

//22 output Failed:filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [[10, 8, 3], [14, 6, 23]]
//filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) should return [["flutes", 4]]

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }

  // change code above this line
  return newArr;
}
// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//23 for of  for...of is typically used to iterate over iterable objects like arrays, and not directly for objects like the one in your example. To use for...of, you'll need to convert the object's properties into an iterable format, such as an array of keys or values.

const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

// Convert object values to an array
const foodQuantities = Object.values(refrigerator);

for (const quantity of foodQuantities) {
  console.log(quantity);
}
//1 12

//24 for in  for (const food in refrigerator): This line initiates a for...in loop, which is used to iterate over the properties (keys) of an object. In this case, it will iterate over the properties of the refrigerator object.
const refrigerator1 = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator1) {
  console.log(food, refrigerator1[food]);
}
// milk 1 ,eggs 2

//25 return keys

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  let getArrayOfUsers = [];

  for (const user in obj) {
    getArrayOfUsers.push(user);
  }

  return getArrayOfUsers; // You need to return the array
}
//or return Object.keys(obj)

console.log(getArrayOfUsers(users));

//26
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
// return userObj.data.friends.push(friend)// returns the new length of the friends array after the addition of the friend. outputs 4
 userObj.data.friends.push(friend);
  return userObj.data.friends; // returns the entire friends array, which will include the newly added friend. outputs ["Sam", "Kira", "Tomo", "Pete"]
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));


//27
let f=3;
let g=4;
let h=6;
function addition(){
  let total=f+g+h;
console.log(total)
}
console.log(total)//it shows  total is not undefined as let is only block level scope

//27 for below case
let count=0;
function add(){
    count=count+1
    console.log(count)
}
add()//1
add()//2
add()//3
console.log(count)//latest count 


//28
var input = 25;

try {
  if (input < 10) {
    throw 'too small!';
  } else if (input > 20) {
    throw 'too big!';
  } else {
    console.log('Input was ' + input);
  }
} catch (e) {
  console.log('Input was ' + e); // output :Input was too big!
}
//factorial For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

factorialize(5);


function factorialize(num) {
  if (num <= 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

function factorialize(num, factorial = 1) {
  if (num <= 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}

factorialize(5);

//finding max length of the longest word in the string provided

function findLongestWordLength(str) {
  let array=str.split(" ")
  let longlength=0;
  for(let i=0;i<array.length;i++){
      const hello=array[i].length
  if(hello>longlength){
      longlength=hello;
  }
  }
  return longlength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//find the largest of four
function largestOfFour(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let initial = -Infinity; // Initialize 'initial' as the minimum possible value for each sub-array

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > initial) {
        initial = arr[i][j];
      }
    }

    newArray.push(initial); // Push the largest value for each sub-array into 'newArray'
  }

  return newArray;
}

 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);//Output: [5, 27, 39, 1001]

 //Check if a string (first argument, str) ends with the given target string (second argument, target).
 //Passed:confirmEnding("Congratulation", "on") should return true.

 function confirmEnding(str, target) {
  let length=target.length;
  let lastword=str.substring(str.length-length)
  return lastword==target
}

console.log(confirmEnding("Bastian", "n"))//true or
function confirmEnding(str, target) {
  return str.endsWith(target)
  }

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  let string="";
  for(let i=1;i<=num;i++){
     string+=(str)
  }
  return string
}

repeatStringNumTimes("abc", 3);//abcabcabc


//
function titleCase(str) {
  // Split the string into an array of words
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }

  // Join the words back into a string
  return words.join(' ');
}

const result3 = titleCase("I'm a little tea pot");
console.log(result3); // Output: "I'm A Little Tea Pot"

//
function frankenSplice(arr1, arr2, n) {
  // Create a copy of arr2 to avoid modifying the original array
  let arr2Copy = arr2.slice();

  // Insert the elements from arr1 into arr2Copy starting at index n
  for (let i = 0; i < arr1.length; i++) {
    arr2Copy.splice(n + i, 0, arr1[i]);
  }

  return arr2Copy;
}

const result4 = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(result4); // Output: [4, 1, 2, 3, 5, 6]

//Remove all falsy values from an array. Return a new array; do not mutate the original array.Falsy values in JavaScript are false, null, 0, "", undefined, and NaN

function bouncer(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]){
filteredArr.push(arr[i]);
    } 
  }
  return filteredArr;
}

const filteredArray = bouncer([7, "ate", "", false, 9]);
console.log(filteredArray); // Output: [7, "ate", 9]



//palindrome


function palindrome(str) {
  var result = str.replace(/[ \(\),.!?'"_\-]/g, "").toLowerCase();
  for (let i = 0; i < Math.floor(result.length / 2); i++) {
    if (result[i] !== result[result.length - i - 1]) {
      return false;
    }
  }
  return true;
}

//convert to roman
function convertToRoman(num) {
  const romanNumericals =["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
  const arabicNumericals=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
 let i
 let result =''
 for(i=0;i<romanNumericals.length;i++){
  while(num>=arabicNumericals[i]){
    result+=romanNumericals[i]
    num-=arabicNumericals[i]
  }
 }
 return result
}

console.log(convertToRoman(36));

//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

function rot13(str) {
  let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let result=""
  for(let i=0;i<str.length;i++){
    if(alphabets.includes(str[i])){
     let newindex=(alphabets.indexOf(str[i])+13)%26;
     result+=alphabets[newindex]
    }
    else{
      result+=str[i]
    }
  }
  return result
}

rot13("SERR PBQR PNZC");//FREE CODE CAMP

function telephoneCheck(str) {
  // Define a regular expression pattern to match valid US phone number formats
  const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  // Use the pattern to test the input string
  return pattern.test(str);
}
// telephoneCheck("1 555 555 5555") should return true.
// Passed:telephoneCheck("1 456 789 4444") should return true.
// Passed:telephoneCheck("123**&!!asdf#") should return false.
// Passed:telephoneCheck("55555555") should return false.


//count of the number of letters in a string
const strin="my name is sada shiva and i am 23 years old"
let obj={};
for(string of strin){
    if(obj[string]){
        obj[string]+=1
    }
    else{
        obj[string]=1
    }
}
console.log(obj)

function hello(){
  console.log("hello shiva how are you");

}
hello()//console above but below one also is one of the method

!function(){
  console.log("hello shiva how are you");
}();//function call,and it will console hello shiva how are you,because it is now a expression after keeping !

const num1=100000;
const num2=1_000_00;//numeric separator
console.log(num1===num2)//true
//
function sada(){
  throw new Error("add parameter to name ")
}

function hello1(name=sada()){//name ="sada" as default value
  console.log(name)
}
hello1()


//make the length 0
const arra=[1,2,3,4,5]
array=[];//works only when initialized with let or var
arra.length=0//or
arra.splice(0,arra.length)
console.log(arra.length)


let h2 = "51";//will not work using const as value should not be reassigned

console.log(h2++); // Outputs: 51 (original value before increment)
console.log(h2);   // Outputs: 52 (value after increment)
//When you use the post-increment operator (h2++), the current value of h2 is returned, 
//and then the value is incremented. So, in your console.log(h2++) statement,
// it prints the current value of h2 (which is "51") and then increments it to "52".
// The result of the ++ operation is the original value before the increment
let b2 = "51";
console.log(++b2); // Outputs: 52 (value after increment)
console.log(b2);   // Outputs: 52 (value after increment)


