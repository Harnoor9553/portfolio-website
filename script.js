/* 
1.Variables - Done
2.Functions - Done
3.Data types - (Numbers, String, Boolean, Null, Undefined, BigInt(100000000n)) - In progress
4.Loops
5.Control Structures ( if else ..) - Done
6. Pop Ups - Done
7.Error Handling
8.Events
SYNTAX - The way you write code - format, rules etc.

What is a KEYWORD - Fixed/Reserved words in a programming language that cannot be used to other tasks except their default ones.

3 Kinds of Pop ups
a. Alert
b. Prompt
c. Confirm

*/
/*
let username = null; Has Nothing
let empty; //Undefined
username = prompt("Hi, can I have your name please?");
alert("Welcome, I'm happy to have you as a visitor, " + username);
//Boolean data type - TRUE/FALSE
confirm("Would you like to continue"); // The user only has 2 options, OK/Cancel - True/False


if (8000 > 1000) {
  alert("Condition block 1 was executed");
}

else {
  alert("Condition block 3 was executed");
}
*/

//1. Inbuilt functions - The ones that you do not DEFINE.
//2. User Defined functions - The ones that you DEFINE and use

//how are functions defined ?
//Function sometimes need inputs as well.
//Those input are called Arguments/Parameters.
/*
let username = prompt("Please enter your name: ")

function greetUser(nameOfUser) {
  alert("Hi, "+ nameOfUser);
}

greetUser(username);
*/

//Task example from a webapp
// Authenticate the user
// a. take username from user
//b. take password form user
//c. check the creds in your backend
//d. allow/deny Access

//Loops
/*
for ( initialization; condition, increment/decrement){
  ...
}
*/

//for (let i = 0; i <= 10 ; i=i+2) {
 // console.log("hello");
//}
/*
let count = 0;
while(count <= 5){
  console.log(count);
  count++;
}
*/

//TASK 1 - Admin Login Button should bring back Admin login section

let controlOfAdminLogin = document.getElementById("admin-login");

function showAdminLogin() {
  controlOfAdminLogin.style.display = "block";
}

//TASK 2 - MAKE TOGGLE BUTTON WORK
document.addEventListener("DOMContentLoaded", function() {
  let controlOfThemeBtn = document.getElementById("switch-theme");

  controlOfThemeBtn.addEventListener('click', function(){
    document.body.classList.toggle("dark-theme");
  });
});


//TASK 3 - Make your Admin Login work.
let controlOfAdminForm = document.getElementById("admin-form");

controlOfAdminForm.addEventListener('submit', function(e){
  e.preventDefault();
  let storedUsername = "admin";
  let storedPassword =  "password";
  
  let username = document.getElementById("usrnme").value;
  let password = document.getElementById("pwd").value;
  
  //LOGIC GATES?? (AND OR NOT)
  //AND - BOTH conditions SHOULD be TRUE -> TRUE SYMBOL -> &&
  //OR - Even if ONE condition is TRUE -> TRUE SYMBOL -> ||
  //NOT - INVERT your decision SYMBOL -> !
  // 2 equal signs 1 with "1" -> TRUE
  //3 equal signs 1 with "1" -> FALSE
  if (storedUsername == username && storedPassword == password) {
    alert("Welcome Admin!");
    
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("user-responses").style.display = "block";
    
    //Call the function which will get user response from the backend in JSON format
    // and display them one by one
  }
  else {
    alert("Access denied!!");
  }
});

//TASK 4 - Store user response from the contact me section in a backend(Chrome LocalStorage)

let controlOfContactmeForm = document.getElementById("contact-me-form");

controlOfContactmeForm.addEventListener('submit', function(e){
  e.preventDefault();
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("msg").value;
  let date = new Date().toLocaleString(); //We are getting the date from the system
  
  //Convert these into an Object- Response Object 
  //Why? so we can send it to the backend
  //and to keep a standard way of storing this data.
  
  let response = {
    name, email, message, date
  }
  
  console.log(response);
  console.log(typeof date);
  
});