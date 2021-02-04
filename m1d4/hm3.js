/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function (a, b) {
  result = a * b;
  return result;
};

const answer = area(11, 12);
console.log(answer);

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (number1, number2) {
  if (number1 === number2) {
    result = (number1 + number2) * 3;
    return result;
  } else {
    result = number1 + number2;
    return result;
  }
};

const answerSum = crazySum(5, 5);
console.log(answerSum);

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (num1, num2) {
  if (num1 > 19) {
    result = (num1 - 19) * 3;
    return result;
  } else {
    result = num1 - 19;
    return result;
  }
};

const answer3 = crazyDiff(20, 19);
console.log(answer3);

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function (n) {
  if (20 < n <= 100) {
    console.log("true");
  } else if (n === 400) {
    console.log("true");
  } else {
    console.log("its not");
  }
};

boundary(25);

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (something) {
  if (something === "Strive") {
    console.log(something);
  } else {
    console.log("Strive " + something);
  }
};
const answers5 = strivify("Hello");

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (x) {
  if (x % 3 === 0) {
    console.log("yes");
  } else if (x % 7 === 0) {
    console.log("also yes");
  } else {
    console.log("no");
  }
};

check3and7(5);

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
