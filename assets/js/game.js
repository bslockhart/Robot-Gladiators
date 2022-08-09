//* Introducing Functions.
//* The alert() function tells the browser to display a message (i.e., an alert) to the
//* user.
//window.alert("This is an alert! JavaScript is running!");


//* This creates a function named "fight".
//* Placing content between the parentheses is called passing an argument into a function.
//* Declaring a Function: Giving it a name.
//function fight() {
//window.alert("The fight has begun!");
//}
//* Calling a Function.
//fight();

//* Storing User Input Using Variables: Prompt's.
//window.prompt("What is your robot's name?");
//* We need to capture this data somehow. To do that, we'll add an expression to the JS file.
//* Introducing Variables.
//var playerName = window.prompt("What is your robot's name?");

//* The Console: A Developer's Best Friend.
var playerName = window.prompt("What is your robot's name?");
//* Call the function.
console.log(playerName);
//* This is a string, good for leaving yourself a message.
console.log("This logs a string, good for leaving yourself a message");
//* This log does math.
console.log(10 + 10);
//* What is this?
console.log("Our robot's name is " + playerName);