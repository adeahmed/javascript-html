
// task 1

// let dice = Number(prompt("How many dice do you want to roll?"));
// let sum = Number(prompt("What is the sum of the eye numbers you want to roll?"));
// let diceRoll = 0;
// let diceSum = 0;
// let diceArray = [];


// for (let i = 0; i < dice; i++) {
//     console.log(i);
//     diceRoll = Math.floor(Math.random() * 6) + 1;
//     diceArray.push(diceRoll);
//     diceSum += diceRoll;
//     console.log;(diceRoll)
// }





const dicenum = parseInt(prompt("How many dice do you want to roll?"));
const goal = parseInt(prompt("What is the sum of the eye numbers you want to roll?"));
const numofrounds = 10000000
let goalachieved = 0;
let sum = 0;

for (diceroll = 0; diceroll <= numofrounds; diceroll++) {
  for (i = 0; i < dicenum; i++) {
    sum = sum + Math.floor((Math.random() * 6) + 1);5
  }
  if (sum == goal) {
      goalachieved++;
    }
  sum = 0;
}
document.body.textContent = `Probability to get sum ${goal} with ${dicenum} dice is ${((goalachieved / numofrounds) * 100).toFixed(5)}%`











