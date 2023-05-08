// Question no: 1

var number = 3.45214
document.write("<h3> number: "+ number +"</ h3>");
document.write("<h3> round off value: "+ Math.round(number) +"</ h3>");
document.write("<h3>  floor value: "+ Math.floor(number) +"</ h3>");
document.write("<h3> ceil value: "+ Math.ceil(number) +"</ h3>");
document.write("<br>")
document.write("<br>")

// Question no: 2

var number = -3.45214
document.write("<h3> number: "+ number +"</ h3>");
document.write("<h3> round off value: "+ Math.round(number) +"</ h3>");
document.write("<h3>  floor value: "+ Math.floor(number) +"</ h3>");
document.write("<h3> ceil value: "+ Math.ceil(number) +"</ h3>");
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Question no: 3

var absolute = prompt("Enter value","-3")
var number = Math.abs(absolute)
document.write("The absolute value of " + absolute + " is " + number)
document.write("<br>")
document.write("<br>")

// Question no: 4

var random = Math.random(random)
random = random * 6
var random1 = Math.ceil(random)
document.write("Random dice Value  : " + random1)
document.write("<br>")

var random = Math.random(random)
random = random * 6
var random1 = Math.ceil(random)
document.write("Random dice Value  : " + random1)
document.write("<br>")
document.write("<br>")

// Question no: 5

var coin = Math.random(coin)
coin = coin * 2
var coinValue = Math.ceil(coin)
document.write(coinValue)
document.write("<br>")

if (coinValue == 1) {
    document.write("Random coin value : heads")
}
else{
    document.write("Random coin value : tails")
}
document.write("<br>")
document.write("<br>")


// Question no: 6

var randomNumber = Math.random(randomNumber);
var value = randomNumber * 100;
value = Math.ceil(value)
document.write("Random Number between 1 and 100 : " + value)
document.write("<br>")
document.write("<br>")

// Question no: 7

var userInput = prompt("Enter you weight in Kilograms " , "58.3kgs")
var value = userInput.slice("0","4")

document.write("The weight of the user is " + value + " kilograms")
document.write("<br>")
document.write("<br>")
// Question no: 8


var randomMatch = Math.random(randomMatch)
randomMatch = randomMatch * 10
var randomCeil = Math.ceil(randomMatch)
var match = prompt("Enter number from 1 to 10","5")
if(match == randomCeil){
    document.write("Congratulations ")
}
else{
    document.write("Try Again")
}