//if statement EXERCISE 1 - Check divisible by 5
let x=10
if(x/5){
    console.log("the number" + x+ "is divisible by 5")
}

//if statement EXERCISE 2 - Check Temperature
let temp=40
if (temp>30){
    console.log("It is hot")
}
//if-ELSE statement EXERCISE 1 - Positive or Negative
let number = 10
if(number<=0){
    console.log(number+ " is a negative number")
}
else{
    console.log("the number is not a negative number")
}

//if-ELSE statement EXERCISE 2 - Eligible for discount
let bill =300
if(bill>1000){
    console.log("You get a discount of 10%")
}
else{
    console.log("No discounts applicable on your purchase")
}

//if-ELSE-IF statement EXERCISE 1 - Grade Calculator
let mark=60;
if(mark>=90){
    console.log("Grade A")
}
else if(mark>=70 && mark<=89){
    console.log("Grade B")
}
else if(mark>=50  && mark<=69){
    console.log("Grade C")
}
else{
    console.log("fail")
}
//if-ELSE-IF statement EXERCISE 2 - Traffic Signal
let signal = "green"
if(signal="red"){
    console.log("stop ")
}
else if(signal="yellow"){
    console.log("wait ")
}
else if(signal="green"){
    console.log("go")
}
//TERNARY operator- Exercise 1
let num=21.2
console.log(num/2? "even":"odd")
//TERNARY operator- Exercise 2
let age =18
console.log(age>=18? "adult":"minor")
//Simple function- Exercise 1
let msg ="Welcome to javascript"
function  welcome(){
    console.log(msg)
}
welcome()
//Simple function- Exercise 2
let message ="Today is a good day"
function  today(){
    console.log(message)
}
welcome()//type this in just to check
today()
//function with parameter & argument -Exercise 1- Greet user
function greet (name){
    console.log("hello, "+name)
}
greet("Lavanya")
greet("Simon")
//function with parameter & argument -Exercise 2- Square of a Number
function squares (number){
    console.log(number**2)
}
squares(3)
//function with return - Exercise 1 - Add 2 numbers - VARIATION 1
function add(){
    return(m+n)
}
let m=10
let n=20
let answer= add()
console.log("(VARIATION 1 )"+add())
//function with return - Exercise 1 - Add 2 numbers - VARIATION 2
function addition(k,l){
    return(k+l)
}
//let answers =addition(10,20); console.log(addition())
//the above line is wrong - since calling function again with no arguments 
console.log("(VARIATION 2 )"+ addition(40,60))
//function with return - Exercise 1 - Add 2 numbers - VARIATION 3
function addition(k,l){
    return(k+l)
}
let answers= addition(50,150)
console.log("(VARIATION 3 )"+answers)

//function with return - Exercise 2 - Check Even
function check(no){
    if(no%2===0){//mistake 1 -wrong operator
        return("even")}
    else{
        return("odd")
    }
   // check(2)
   //mistake 2 - dont keep the above line inside function
}
console.log(check(8))//mistake 3 - didnt pass value 8 inside function 

//function EXPRESSION - Exercise 1 - Multiply 2 nos
let multiply = function(a,b){
    return (a*b)
}
console.log(multiply(4,5))

//function EXPRESSION - Exercise 2 - Find largest no
let largest = function(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log(largest(10,11))

//ARROW function  - Exercise 1 - Subtract 2 numbers
let subtraction =(o,p)=>{
    return (o-p)
}
console.log(subtraction(23,7))

//ARROW function  - Exercise 2 - Check Adult
let major= (g)=>{
    if(g>=18){
    return("Adult")
}
    else{
        return("Minor")
    }
}
console.log(major(3))
