//window.alert("This is an alert! JavaScript is running!");

//window.alert("The fight has begun!");
//fight();

//window.prompt("What is your robot's name?");
//var playerName = window.prompt("What is your robot's name?");

//var playerName = window.prompt("What is your robot's name?");
//console.log(playerName);

//console.log("This logs a string, good for leaving yourself a message");
//console.log(10 + 10);
//console.log("Our robot's name is " + playerName);

//* 3.1.6
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  window.alert("Welcome to Robot Gladiators!");
};
enemyHealth = enemyHealth - playerAttack;
playerHealth = playerHealth - enemyAttack;
console.log(
  //playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);


fight();
