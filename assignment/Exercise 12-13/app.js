// Question no: 2

var num1 = 5;
var  num2 = 5;
if (num1 === num2) {
  document.write("The two number are equal.");
  document.write("<br>")
} else {
  document.write("The two number are not equal");
  document.write("<br>")
}
document.write("<br>")

// Question no: 3

var num = 4;
if (num > 0) {
  document.write(num + " is positive.");
  document.write("<br>")
}
else if (num < 0) {
  document.write(num + " is negative.");
  document.write("<br>")
}
else {
  document.write("The number is 0.");
  document.write("<br>")
}
document.write("<br>")

var num = -3;
if (num > 0) {
  document.write(num + " is positive.");
  document.write("<br>")
}
else if (num < 0) {
  document.write(num + " is negative.");
  document.write("<br>")
}
else {
  document.write("The number is 0.");
  document.write("<br>")
}
document.write("<br>")

var num = 0;
if (num > 0) {
  document.write(num + " is positive.");
  document.write("<br>")
}
else if (num < 0) {
  document.write(num + " is negative.");
  document.write("<br>")
}
else {
  document.write("The number is 0.");
  document.write("<br>")
}
document.write("<br>")

// Question no: 4

var  vowels = "a"
if (vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u") {
  document.write(vowels + " vowel hai.");
  document.write("<br>")
} else {
  document.write(vowels + " vowel nahi hai.");
  document.write("<br>")
}
document.write("<br>")

// Question no: 5

var passWord = "karachi321"
var userPassWord = prompt("Enter your password:" ,"karachi321")
if (passWord === userPassWord){
    document.write("Password is Correct!")
    document.write("<br>")
}
else{
    document.write("Incorrect password.");
    document.write("<br>")
}
document.write("<br>")

// Question no: 6

var greeting;
var hour = 0;
if (hour >= 0 && hour <= 12) {
    greeting = "Good morning";
} else if(hour >= 13 && hour <= 18) {
    greeting = "Good after moon";
}
else if(hour >= 19 && hour <= 24){
    greeting = "Good evening";
}
document.write(greeting)
document.write("<br>")

