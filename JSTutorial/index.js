//https://www.youtube.com/watch?v=8dWL3wF_OMw&t=14856s&ab_channel=BroCode

/*
document.getElementById('p1').innerHTML = 'Hello p1'
document.getElementById('p2').innerHTML = 'Hello p2'
document.getElementById('p3').innerHTML = 'Hello p3'
*/

// Window promt

// let username = window.prompt('Hello how are you?')
// console.log(username)

// let username;

// document.getElementById('myButton').onclick = function() {
//   username = document.getElementById('myText').value;
//   console.log(username)

// }

// TYPE CONVERTION

// let age = window.prompt('how old are you')

// console.log(typeof age)
// age = Number(age)
// age += 1;
// console.log(typeof age)
// console.log('HP', age, "years")

// MATH

// let x = 3.14;

// x = Math.round(x);

// CHECKBOX PROPERTY

// {
//   /* <label for="visa">Visa</label>
// <input type="radio" name="card" id="visa" />
// <label for="masterCard">masterCard</label>
// <input type="radio" name="card" id="masterCard" />
// <label for="applePay">applePay</label>
// <input type="radio" name="card" id="applePay" /> */
// }

// const visa = document.getElementById("visa");
// const masterCard = document.getElementById("masterCard");
// const applePay = document.getElementById("applePay");
// const submitBtn = document.getElementById("btn");

// submitBtn.onclick = function () {
//   if (visa.checked) {
//     console.log("Visa payment");
//   } else if (masterCard.checked) {
//     console.log("Mastercard payment");
//   } else if (applePay.checked) {
//     console.log("Applepay payment");
//   } else {
//     console.log("Please select payment method");
//   }
// };

// NUMBER GUESSING GAME

// const submitButton = document.getElementById('submitButton')

// // do{
// //     const guessNumber =1;
// //     const answer = 1;
// // // something
// // // guess number - enter number and press button
// // // do it again and again until the number is = to answer
// // console.log('delam')
// let counter = 0;
// submitButton.onclick = function() {
//     counter +=1;// not working

//     let textField = document.getElementById('input')
//     const answer = Math.floor(Math.random() * 5) + 1;

//     console.log(answer)
//     console.log(textField.value)

//     if(answer != textField.value){
//         console.log('Try again')
//         textField.value = "";
//         // counter +=1;
//     }
//     else{
//         // counter +=1;
//         alert(`Congratulation, you are the winner. It took you ${counter} attempts`)
//     }

// // }while(guessNumber === answer)
// }

// TEMPERATURE CONVERTION
// function toCelsius(temperature){
// return (temperature - 32) * (5/9)
// }

// function toFahrenheit(temperature){
// return temperature * 9 / 5 + 32
// }

// let temperature = document.getElementById('textBox')

// const submitBtn = document.getElementById('submitButton')

// const toCesiusRadio = document.getElementById('cButton')

// const toFahrenheitRadio = document.getElementById('fButton')

// let resultLabel = document.getElementById('temperatureLabel')

// submitBtn.onclick = function() {
//  if(toCesiusRadio.checked){
//    temperature = temperature.value
//    temperature = Number(temperature)
//     temperature = toCelsius(temperature)
//     console.log(temperature)
//     resultLabel.innerHTML = temperature
//  }
//  else if(toFahrenheitRadio.checked){
//    temperature = temperature.value
//    temperature = Number(temperature)
//     temperature = toFahrenheit(temperature)
//     console.log(temperature)
//     resultLabel.innerHTML = temperature
//  }
//  else{
//     resultLabel.innerHTML = 'Select a unit'
//  }

// }

// SPREAD OPERATOR ...
// z array dostanu hotony jedotlive
// ze stringu dostanu pismena jednotlive

// let numbers = [1, 2, 3, 4, 5, 6, 7]

// console.log(...numbers)

// REST PARAMETERS ...
// do funkce nedam parametry number1 number2. Vezme to vsechny parametry

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// let f = 5;

// console.log(sum(a,b,c,d,e,f))

// function sum(...numbers){
// let total = 0;

// for(let number of numbers){
//    total += number
// }

// return total;
// }

// CALLBACK FUNCTION

// // sum(2, 3, something)
// sum(2, 5, displayConsole); // udela sum 2 a 5 a az potom udela displayConsole funkci

// function sum(x, y, callBack){
//    let resutl = x + y;
//    callBack(resutl) // to se pak dosadi do displayConsole(sem)
// }

// function displayConsole(output){
//     console.log(output)
// }

// array.forEach(element => {

// });

// // FOR EACH

// let students = ['student1', 'student2', 'student3']

// // students.forEach((student, idx) => {
// //    console.log(student + idx)
// // })

// students.forEach(displayStudents)

// function displayStudents (student, idx) {
// console.log(student + "student index: " + idx)
// }

// ARRAY MAP
// pro kazdy element v array udela callback funkci a vytvori novy array

// let numbers = [1, 2, 3, 4, 5]
// let squares = numbers.map(square);

// // console.log(square(numbers)) // not working

// squares.forEach(print)

// function square(element){
//    return Math.pow(element, 2);
// }

// function print(element){
//    console.log(element)
// }

// ARRAY FILTER METHOD

// let ages = [11, 15, 16, 17, 20, 21 , 35, 89]
// let adults = ages.filter(checkAge)

// adults.forEach(print)

// function checkAge(element){
//    return element > 18
// }

// function print(element){
//    console.log(element)
// }

// ARRAY REDUCE
// z array udela jednu hodnotu

// let prices = [11, 10, 15, 20]
// let total = prices.reduce(totalPrice)

// console.log(total)

// function totalPrice(total, element){
//    return total + element;
// }

// SORTING NUMBERS IN ARRAY

// let grades = [90, 10, 50, 30, 70]
// grades = grades.sort(descendingSort)

// grades.forEach(print)

// function descendingSort(x, y){
//    return y - x;
// }

// function ascendingSort(x, y){
//    return x - y;
// }

// function print(element){
//    console.log(element)
// }

// ARROW FUNCTION

// // original

// const percent = function (x, y) {
//   return (x / y) * 100;
// };

// console.log(`${percent(37, 50)}`);

// // arrow function

// const percent2 = (x, y) => (x / y) * 100;

// console.log(`${percent2(37, 50)}`);

// SHUFFLE ARARY

// const cards = ["A", "2", "3", "4", "5", "6"];

// shuffle(cards);
// console.log(cards);

// function shuffle(array) {
//   let currentIndex = array.length;

//   while (currentIndex != 0) {
//     let randomIndex = Math.floor(Math.random() * array.length);
//     currentIndex -= 1;

//     let temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }

//   return array;
// }

// NESTED FUNCTIONS

// nemam pristup k nested functions primo. musim zavolat hlavni funkci pod kterou jsou nested funkce

// let userName = "KB";
// let userInbox = 0;

// login();

// function login() {
//   displayUserName();
//   displayUserInbox();

//   function displayUserName() {
//     console.log(`Welcome ${userName}`);
//   }
//   function displayUserInbox() {
//     console.log(`You have ${userInbox} new message`);
//   }
// }

// MAP

// const store = new Map([
//   ["t-shirt", 20],
//   ["jeans", 30],
//   ["jacket", 10],
// ]);

// store.get("t-shirt");
// store.set("socks", 40);
// store.delete("socks");
// console.log(store.has("socks"));
// store.forEach((value, key) => console.log(`${key} ${value}`));

// OBJECT

// const car = {
//   model: "Mustang",
//   color: "red",
//   year: 2023,

//   drive: function () {
//     console.log("You drive the car");
//   },
//   breake: function () {
//     console.log("You are braking");
//   },
// };

// console.log(car.log);
// console.log(car.color);
// console.log(car.year);

// car.drive();
// car.breake();

// THIS

// const car1 = {
//   model: "Mustang",
//   color: "red",
//   year: 2023,

//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
// };

// const car2 = {
//   model: "Corvett",
//   color: "red",
//   year: 2023,

//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
// };

// car1.drive();
// car2.drive();

// CLASS

// class Player {
//   score = 0;

//   pause() {
//     console.log("You paused the game");
//   }

//   exit() {
//     console.log("You exited the game");
//   }
// }

// const player = new Player();

// console.log(player.score);

// player.pause();

// CONSTRUCTOR

// class Student {
//   constructor(name, age, gpa) {
//     this.name = name;
//     this.age = age;
//     this.gpa = gpa;
//   }
//   study() {
//     console.log(`${this.name} is studying`);
//   }
// }

// const student = new Student("Petr", 32, 3.2);
// const student2 = new Student("Adam", 12, 31.2);
// console.log(student.name);
// student.study();

// STATIC
// patri ke classe ne k objektu.
// nemusim vytvaret new Object(), ale rovnou static funkci zavolam

// class Car {
//   static numberOfCars = 0;
//   constructor(model) {
//     this.model = model;
//     Car.numberOfCars += 1;
//   }

//   static startRace() {
//     console.log("You have started");
//   }
// }

// const car1 = new Car("Mustang");
// const car2 = new Car("BMW");
// const car3 = new Car("Audi");
// const car4 = new Car("Audi");

// console.log(Car.numberOfCars);

// Car.startRace();

// INHERITANCE

// class Animal {
//   alive = true;
//   eat() {
//     console.log(`This${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`This${this.name} is sleaping`);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";

//   run() {
//     console.log(`This${this.name} is running`);
//   }
// }
// class Fish extends Animal {
//   name = "fish";

//   swim() {
//     console.log(`This${this.name} is swimming`);
//   }
// }
// class Hawk extends Animal {
//   name = "fish";

//   fly() {
//     console.log(`This${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// fish.sleep();
// fish.run(); // fish does not have run function -> this will not work

// SUPER

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
// }
// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
// }

// const rabbit = new Rabbit("rabbit", 1, 40);
// const fish = new Fish("fish", 2, 80);
// const hawk = new Hawk("hawk", 3, 400);

// GET, SET

// class Car {
//   constructor(power) {
//     this._gas = 25;
//     this._power = power;
//   }
//   get power() {
//     return this._power;
//   }
//   get gas() {
//     return this._gas;
//   }
//   set gas(value) {
//     if (value > 50) {
//       value = 50;
//     }
//     this._gas = value;
//   }
// }

// let car = new Car(400);

// console.log(car.power);
// console.log(car.gas);

// Object as argumetn

// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// }

// const car1 = new Car("Skoda", 2020, "white");
// const car2 = new Car("vw", 2008, "blue");

// changeColor(car1, "red");
// displayCar(car1);

// function changeColor(car, color) {
//   car.color = color;
// }

// function displayCar(car) {
//   console.log(car);
// }

// ARRAY OF OBJECTS

// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// }

// const car1 = new Car("Skoda", 2020, "white");
// const car2 = new Car("vw", 2008, "blue");
// const car3 = new Car("vw", 2008, "blue");
// const car4 = new Car("vw", 2008, "blue");

// const cars = [car1, car2, car3, car4];

// // writeArray(cars);
// writeArray2(cars);

// function writeArray(cars) {
//   cars.forEach((car) => {
//     console.log(car);
//   });
// }

// function writeArray2(cars) {
//   for (let car of cars) {
//     console.log(car);
//   }
// }

// ANONYMOUS OBJECT

// class Card {
//   constructor(value, suit) {
//     this.value = value;
//     this.suit = suit;
//   }
// }

// // normal way
// let card1 = new Card("A", "Hearts");
// let card2 = new Card("A", "Spades");
// let card3 = new Card("A", "Clubs");
// let card4 = new Card("A", "Clubs");
// let card5 = new Card("A", "Clubs");

// let cards = [card1, card2, card3, card4, card5];

// console.log(card1.value + card1.suit);
// console.log(cards[0].value + cards[0].suit);

// // anonymous way

// let cards2 = [
//   new Card("A", "Hearts"),
//   new Card("A", "Spades"),
//   new Card("A", "Clubs"),
//   new Card("A", "Clubs"),
// ];

// console.log(cards2[0].value + cards2[0].suit);

// // for each method to write the array (not connected to anonymoous)

// cards2.forEach((card) => console.log(card.value + card.suit));

// ERROR HANDELING

// try {
//   let x = window.prompt("enter a number");
//   x = Number(x);

//   if (isNaN(x)) throw "That was not a number";
//   if (x == "") throw "That was empty";

//   console.log(`${x} is a number`);
// } catch (error) {
//   console.log(error);
// }

// finally{
//   console.log("This always executes")
// }

// SET TIMEOUT

// let item = "cryptocurrency";
// let price = 420;

// let timer1 = setTimeout(firstMessage, 4000, item, price);
// let timer2 = setTimeout(secondMessage, 4000);
// let timer3 = setTimeout(thirdMessage, 4000);

// function firstMessage(item, price) {
//   alert(`first${item} ${price}`);
// }
// function secondMessage() {
//   alert("second");
// }
// function thirdMessage() {
//   alert("third");
// }

// document.getElementById("submitButton").onclick = function () {
//   clearTimeout(timer1, timer2, timer3);
//   alert("you have bought the course");
// };

// SET INTERVAL

// let count = 0;
// let max = window.prompt("enter number");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp() {
//   count += 1;
//   console.log(count);
//   if (count >= max) {
//     clearInterval(myTimer);
//   }
// }

// DATE OBJECT - CONTINUE
// let date = new Date();
// // let date = new Date(2023, 8, 12, 2, 34, 43, 5);

// // let year = date.getFullYear();
// // let dayOfMonth = date.getDate();
// // let dayOfWeek = date.getDay();
// // let month;
// // let hour;
// // let minutes;
// // let seconds;
// // let miliseconds;

// // date = date.toLocaleString();
// // console.log(date);

// function formatDate(date) {
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   //   console.log(`${month}/${day}/${year}`);
//   return `${month}/${day}/${year}`;
// }
// // formatDate(date);

// function formatTime(date) {
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let amOrPm = hours >= 12 ? "pm" : "am";

//   hours = hours % 12 || 12;

//   console.log(`${hours}:${minutes}:${seconds} ${amOrPm}`);
//   return `${hours}:${minutes}:${seconds} ${amOrPm}`;
// }

// formatTime(date);

// // CLOCK PROGRAM

// const label = document.getElementById("clockLabel");

// update();
// setInterval(update, 1000);

// function update() {
//   const date = new Date();
//   label.innerHTML = formatTime(date);

//   function formatTime(date) {
//     hours = date.getHours();
//     minutes = date.getMinutes();
//     seconds = date.getSeconds();

//     return `${hours}:${minutes}:${seconds}`;
//   }
// }

// CONSOLE TIME

// // start
// console.time("response time")

// // something
// setTimeout(() => console.log('hello', 3000))

// //end
// console.timeEnd('response time')

// PROMISE

// Object that encapsulated the result of an asynchronous operation
// let asynchronous methods return values like synchronous methods
// "I promise to return something in the future"

// the STATE is 'pending' then: 'fulfilled' or 'rejected'
// the RESULT is what can be returned
// 2 parts producing and consuming

// first example
// const promise = new Promise((resolve, reject) => {

//     let fileLoaded = true;

//     if(fileLoaded){
//         resolve("File loaded")
//     }
//     else(
//         reject("File is NOT loaded")
//     )
// })

// promise.then((value) => console.log(value)) // value is file loaded or file not loaded
//         .catch(error => console.log(error)) //pro rejected

// second example

// const wait = time => new Promise(resolve => {
//     setTimeout(resolve, time)
// })

// wait(3000).then(() => console.log("Thanks for waiting"))

// ASYNC
// makes a function return a Promise

// first option
// async function loadFile() {
//   let fileLoaded = true;

//   if (fileLoaded) {
//     return "File loaded";
//   } else {
//     return "File not loaded";
//   }
// }

// loadFile()
//   .then((value) => consolo.log(value))
//   .catch((error) => console.log(error));

// second option

// function loadFile() {
//   let fileLoaded = true;

//   if (fileLoaded) {
//     return Promise.resolve("File loaded");
//   } else {
//     return Promise.reject("File not loaded");
//   }
// }

// loadFile()
//   .then((value) => consolo.log(value))
//   .catch((error) => console.log(error));

// AWAIT - makes an async function wait for a Promise

// async function loadFile() {
//   let fileLoaded = false;

//   if (fileLoaded) {
//     return "File loaded";
//   } else {
//     throw "File not loaded";
//   }
// }

// async function startProcess() {
//   try {
//     let message = await loadFile();
//     console.log(message);
//   } catch (error) {
//     console.log(error);
//   }
// }

// startProcess();

// ES6 MODULES
// // in to the html <script type="module" src="index.js"></script>
// import { PI, getCircumference, getArea } from "./math_util.js"; // first option
// // import * as MathUtil from "./math_util.js"; // second option - in the code has to be with MathUtil.PI ...

// console.log(PI);

// let circumference = getCircumference(10);
// console.log(circumference);

// let area = getArea(10);
// console.log(area);
// math_util.js

// DOM - DOCUMENT OBJECT MODEL (API)
// interface for changing the content of the page

// console.log(document);
// console.log(document.title);
// console.log(document.URL);

// document.title = "New TItle";
// // document.location = "https://www.google.com";

// document.body.style.backgroundColor = "skyblue";
// document.getElementById('myDiv').innerHTML = "Hello"

// ELEMENT SELECTORS

//html
{
  /* <h1 id="MyTitle">This is title</h1>

<input type="radio" name="fruits" value="apple" checked="checked" />
<label for="apple">apple</label><br />
<input type="radio" name="fruits" value="orange" />
<label for="orange">orange</label><br />
<input type="radio" name="fruits" value="banana" />
<label for="banana">banana</label><br />

<ul>
  <li>carrots</li>
  <li>onions</li>
  <li>cucumber</li>
</ul>

<div class="desserts">ice cream</div>
<div class="desserts">cake</div>
<div class="desserts">pie</div> */
}

// GETELEMENTBYID
// let element = document.getElementById('MyTitle')
// element.style.backgroundColor = "red"

// GETELEMENTSBYNAME
// let fruits = document.getElementsByName("fruits");

// console.log(fruits[0]); // apple
// console.log(fruits[1]); // orange
// console.log(fruits[2]); // banana

// fruits.forEach((fruit) => {
//   if (fruit.checked) {
//     console.log(fruit.value);
//   } else {
//     console.log(`it is not checked`);
//   }
// });

// GETELEMENTSBYTAGNAME

// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.backgroundColor = "blue";

// GETELEMENTSBYCLASSNAME

// let desserts = document.getElementsByClassName("desserts");
// desserts[0].style.backgroundColor = "red";

// QUERYSELECTOR

// let element = document.querySelector("#MyTitle");
// element.style.backgroundColor = "red";

// let element = document.querySelector(".desserts")
// let element = document.querySelector("li")
// let element = document.querySelector("[for]")

// QUERYSELECTOR ALL

// let elements = document.querySelectorAll("li");

// elements.forEach((element) => {
//   element.style.backgroundColor = "yellow";
// });

// DOM TRAVERSAL

// .firstElementChild
// .lastElementChild    pokud to je document.body.lastElementChild => bude to <script>
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)

// let element = document.querySelector("#vegetables");
// let child = element.parentElement; // the whole body
// let sibling1 = element.nextElementSibling;  //deserts
// let sibling2 = element.previousElementSibling; // fruit
// console.log(child);
// child.style.backgroundColor = "green";

// let element = document.querySelector("#fruit");
// // let child = element.children[0]

// // pro vypsani vsech children bez []
// let children = Array.from(element.children);

// children.forEach((child) => {
//   console.log(child.innerHTML);
// });

// ADD/CHANGE HTML ELEMENTS
// .innerHtmnl (vulnerable to XSS attacks)
// .textContent (more secure)

// const nameTag = document.createElement("h1");
// // nameTag.innerHTML = window.prompt("Enter your title");
// nameTag.textContent = window.prompt("Enter your title"); //safer (user can not input virut in to the promt)
// document.body.append(nameTag);

// const myList = document.querySelector("#fruit");
// const listItem = document.createElement("li");
// listItem.textContent = "mango";
// // myList.append(listItem); // at the bottom
// // myList.prepend(listItem); // at the top

// myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);

//ADD/CHANGE CSS PROPERTIES

// const title = document.getElementById("title");

// title.style.backgroundColor = "red";

//EVENTS
// const element = document.getElementById('btn')
// element.onclick = doSomething;

// function doSomething() {
//   console.log("hello");
// }

// const element = document.body;
// element.onload = doSomething;

// const element = document.getElementById("textBox");
// element.onchange = doSomething;

// const element = document.getElementById('div')
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
// element.onmousedown = doSomething; // nemusim pouzivat button
// element.onmouseup = doSomethingElse;

// . ADD EVENT LISTENER (event, function, useCapture)

// const innerDiv = document.getElementById('innerDiv')
// const outerDiv = document.getElementById('outerDiv')

// innerDiv.addEventListener('mouseover', changeRed);
// innerDiv.addEventListener('mouseout', changeGreen);

// function changeRed(){
//   innerDiv.style.backgroundColor = 'red'
// }

// function changeGreen(){
//   innerDiv.style.backgroundColor = 'green'
// }

// innerDiv.addEventListener('click', changeBlue); // nejprve se zmeni inner div a pak outer div
// outerDiv.addEventListener('click', changeBlue, true); // udela se to naopak

// function changeGreen(){
//   alert(`you selected ${this.id}`)
//   this.style.backgroundColor = 'blue'
// }