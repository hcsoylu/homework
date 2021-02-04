/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let thisİsMe = {
  name: "Huseyin",
  surname: "Soylu",
  email: "hsyncn17@gmail.com",
  age: 26,
};
console.log(thisİsMe);

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

thisİsMe.haveDrivingLicense = true;
console.log(thisİsMe);

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete thisİsMe.age;
console.log(thisİsMe);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let anotherOne = {
  name: "ronaldinho",
  surname: "gaucho",
  email: "ronaldinho10@hotmail.com",
};
console.log(anotherOne);

if (thisİsMe.email === anotherOne.email) {
  console.log("yes they are same");
} else {
  console.log("no they are not same");
}

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/

let totalShoppingCart = 80;

const price =
  totalShoppingCart > 50 ? "you are eligible for free shipping" : "$10";
console.log(price);

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
let price = totalShoppingCart - (totalShoppingCart * 20) / 100;

if (price > 50) {
  console.log("total cost", price);
} else {
  console.log("total cost", price + 10);
}

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car1 = {
  brand: "opel",
  model: "astra",
  licensePlate: "strive1",
};

let car2 = Object.assign({}, car1);
car2.licensePlate = "strive2";
let car3 = Object.assign({}, car1);
car3.licensePlate = "strive3";
let car4 = Object.assign({}, car1);
car4.licensePlate = "strive4";
let car5 = Object.assign({}, car1);
car5.licensePlate = "strive5";
let car6 = Object.assign({}, car1);
car6.licensePlate = "strive6";

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [car1, car2, car3, car4, car5, car6];
console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
carsForRent.shift();
console.log(carsForRent);

/* EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/

console.log(carsForRent[0].brand);
console.log(carsForRent[1].licensePlate);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = ["opel", "ferrari", "mercedes"];
let totalCars = carsForSale.length + carsForRent.length;
console.log(totalCars);
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

console.log(carsForSale[0]);
console.log(carsForSale[1]);
console.log(carsForSale[2]);

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/
