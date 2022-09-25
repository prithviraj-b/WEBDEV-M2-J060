// Variable Declarations
// We use let and const to declare variables in javascript
 

let x = 10 // let is to make the value dynamic in the sense it can change
let y = 20
const m = 25 // const makes it static hence The value cannot change
let z = x + y

// Javascript function
// A JavaScript function is a block of code designed to perform a particular task.
// We use functions so that we can reuse that paticular block of code throughout our appliaction
// without having to code it again, this saves time and makes our code cleaner and more readable

function add(x,y) {
    let z = x + y
    return z // Here we return z which consists of the addition of x and y and acts as an add function
}

// We also have something known as an arrow function which helps reduce the syntax required for our function
Addition = (a,b) => { //With the use of arrow we have reduced our code and made it more readable
    m = a + b
    return m
}


// if else and loop concepts :
// if else statements are decision making tools used in code to perform different actions for different decisions
// We also have loops in code to repeat a task repeatedly for a paticular purpose

const value = 25;
let statement; //Here we have a variable statement equal to any whose value we assign based on our conditional statements below
if (value < 25) {
  statement = "Number 1";
} else if (value < 20) {
  statement = "Number 2";
} else {
  statement = "Number 3";
}

// Two main loops used in javascript are for and while loops, an example based on each is given below
const Tech_Giants = ["Apple", "Google", "Microsoft", "IBM", "Infosys", "Wipro"];

let text = "";
for (let i = 0; i < Tech_Giants.length; i++) {
  text += Tech_Giants[i] + "<br>";
}

// Above given for loop will demonstrate the names in the list one by one 

let number = "";
let i = 0;
while (i < 10) {
  number += "<br>The number is " + i;
  i++;
}

// Hence the while loop will run until number eaches 10 and then it will stop