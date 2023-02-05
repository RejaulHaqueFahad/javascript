var x; // this is called declaration
var x = 5; // thi is called assign
var y = 6;
var z = x + y;

document.write("</br>" + z);
console.log(z);

{
let x = 5, y = 6, z = x + y;
document.write("</br>" + z);
console.log(z);
}

{
let x = 2;
document.write("</br>" + x);
}

let text0 = "Let's see how many letters in here........";
console.log(text0.length);

let text1 = "Let's see what \"Happend\"...";
console.log(text1);

let text2 = "Let's see what \tHappend\...";
console.log(text2);

let text3 = "Let's see what \
Happend...";
console.log(text3);

let text4 = "Happend";
document.write("</br>" + text4.length);

// let text5 = prompt("What is your name?");
// document.write(text5.length);

let text6 = " Noise ";
document.write("</br>" + text6.charAt(4));

let text7 = " Loud ";
loud = text7.toLowerCase();
document.write("</br>" + loud);

let text8 = " Small ";
small = text8.toUpperCase();
document.write("</br>" + small);

document.write("</br>" + text4.concat(text6));

let text9 = " Bangladesh ";
bangladesh = text9.slice(7, 11)
document.write("</br>" + bangladesh);


let f = 3;
f += 4;
console.log("</br>" + f)

let g = 3;
g *= 4;
console.log("</br>" + g)

var num1 = prompt("Enter your first number");
var num2 = prompt("Enter your second number");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var result;
result = num1 + num2;
document.write("</br>" + num1 + " + " + num2 + " = " + result);

result = num1 - num2;
document.write("</br>" + num1 + " - " + num2 + " = " + result);

result = num1 * num2;
document.write("</br>" + num1 + " * " + num2 + " = " + result);

result = num1 / num2;
document.write("</br>" + num1 + " / " + num2 + " = " + result);

result = num1 % num2;
document.write("</br>" + num1 + " % " + num2 + " = " + result);

var base = parseFloat(prompt("Enter Base = "));
var height = parseFloat(prompt("Enter Height"));

var area = base * height;
document.write("</br>" + "Area = " + area);
// document.getElementById("demo").innerHTML

// let x = 5;
// let y = 6;
// let z = x + y;

// console.log(z)

// for(let i = 1; i <= 100; i++) {
//     document.write(i);
// }

/* this is a 
multiline comment */

// if (true) {
//     let x = 4;
//     console.log(x)
// }

// function myFunction(p1, p2) {
//     return p1 * p2;
//   }


//   let x = myFunction(4, 3);  

// function myFunction(a, b) {
//   return a * b;         
// }


// function toCelsius(fahrenheit){
//     return (5 / 9) * (fahrenheit-32);
// }
//     document.getElementById("demo").innerHTML = toCelsius(77);


// function myFunction() {
//     let carName = "Yamaha";
//     console.log(carName)
// }
// myFunction();


  


// const person = {
//     firstName: "Reja",
//     lastName: "Fahad",
//     age: 28,
//     eyeColor: "blue"
// };

// // document.write(person)
// document.write(person.firstName)
// document.write(person.lastName)
// document.write(person.age)
// document.write(person.eyeColor)





// function vowelCount(sentence){
//     let vowel=["a","e","i","o","u","A","E","I","O","U"];
//     let letters = Array.from(sentence),i;
//     let count=0;
//     for(i=0;i<letters.length;i++){
//         if(letters[i]==vowel){
//             count++;
//         }
//     }
//     console.log(count);
//     return count;

// }

// document.getElementById("demo101").innerHTML=vowelCount("I'm trying to learn JavaScript Language");