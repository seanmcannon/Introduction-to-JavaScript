/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = prompt("What is your age");

if (votingAge >= 18) {
  console.log("True");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let myVar = "initial";
let answer = "true";

if (answer === "true") {
  myVar = "groovy";
  console.log(myVar);
} else if (answer === "false") {
  myVar = "lame";
  console.log(myVar);
}

// console.log(myVar);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let myString = "1999";
let myInteger = parseInt(myString);
console.log(myInteger);
console.log(typeof myInteger);

//Task d: Write a function to multiply a*b

function multiply(num1, num2) {
  return num1 * num2;
}

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years
var myAge = prompt("How old are you?");

function dog(myAge) {
  var dogAge = 7 * myAge;
  console.log(dogAge);
}

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(dogAge, dogWeight) {
  if (dogAge >= 1 && dogWeight <= 5) {
    let dogFood = dogWeight * 0.05;
    console.log(dogFood);
  } else if (dogAge >= 1 && dogWeight >= 6 && dogWeight <= 10) {
    let dogFood = dogWeight * 0.04;
    console.log(dogFood);
  } else if (dogAge >= 1 && dogWeight >= 11 && dogWeight <= 15) {
    let dogFood = dogWeight * 0.03;
    console.log(dogFood);
  } else if (dogAge >= 1 && dogWeight > 15) {
    let dogFood = dogWeight * 0.02;
    console.log(dogFood);
  } else if (dogAge >= 0.165 && dogAge <= 0.332) {
    let dogFood = dogWeight * 0.1;
    console.log(dogFood);
  } else if (dogAge >= 0.332 && dogAge <= 0.584) {
    let dogFood = dogWeight * 0.05;
    console.log(dogFood);
  } else if (dogAge >= 0.584 && dogAge < 1) {
    let dogFood = dogWeight * 0.04;
    console.log(dogFood);
  }
}

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function play() {
  var comp1 = Math.floor(Math.random() * 3);
  if (comp1 === 0) {
    comp1 = "rock";
  } else if (comp1 === 1) {
    comp1 = "paper";
  } else {
    comp1 = "scissors";
  }
  var comp2 = Math.floor(Math.random() * 3);
  if (comp2 === 0) {
    comp2 = "rock";
  } else if (comp2 === 1) {
    comp2 = "paper";
  } else {
    comp2 = "scissors";
  }
  console.log("Player one rolls " + comp1 + ".");
  console.log("Player Two rolls " + comp2 + ".");

  if (comp1 === comp2) {
    console.log("Game ends in tie.");
  } else if (comp1 === "rock" && comp2 === "scissors") {
    console.log("Player one wins " + comp1 + " beats " + comp2 + ".");
  } else if (comp1 === "rock" && comp2 === "paper") {
    console.log("Player two wins " + comp2 + " beats " + comp1 + ".");
  } else if (comp1 === "paper" && comp2 === "rock") {
    console.log("Player One wins " + comp1 + " beats " + comp2 + ".");
  } else if (comp1 === "paper" && comp2 === "scissors") {
    console.log("Player Two wins " + comp2 + " beats " + comp1 + ".");
  } else if (comp1 === "scissors" && comp2 === "paper") {
    console.log("Player One wins " + comp1 + " beats " + comp2 + ".");
  } else if (comp1 === "scissors" && comp2 === "rock") {
    console.log("Player Two wins " + comp2 + " beats " + comp1 + ".");
  }
}

//   function game() {
//     return winner;
//   }
// }

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

var whichConv = prompt("Kilometers or feet?");
var unitMeasured = prompt("how much");

if (whichConv === "feet") {
  console.log(unitMeasured * 30.48 + " CM");
} else {
  console.log(unitMeasured / 1.60934 + " Miles");
}

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(num) {
  for (let i = num; i > 0; i--) {
    console.log(
      i +
        " bottles of beer on the wall, " +
        i +
        " Bottles of beer, take one down pass it around, " +
        (i - 1) +
        " bottles of beer on the wall."
    );
  }
}

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

var score = prompt("What is your score?");

if (score <= 100 && score >= 90) {
  console.log("You scored an A!");
} else if (score <= 90 && score > 79) {
  console.log("You scored a B");
} else if (score < 80 && score > 69) {
  console.log("You scored a C");
} else if (score < 70 && score > 59) {
  console.log("You scored a D");
} else console.log("You are a failure");

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
