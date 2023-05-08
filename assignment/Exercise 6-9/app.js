document.write("<br>");
document.write("<br>");
document.write("<br>");

// Question no: 1

var a = 10;
document.write("Result:");
document.write("<br>");
document.write("The value of a is " + a);
document.write("<br>");

document.write("..............................................");
document.write("<br>");
document.write("<br>");

document.write("The value of ++a is " + ++a);
document.write("<br>");
document.write("Now the value of a is " + a);
document.write("<br>");
document.write("<br>");

document.write("The value of a++ is " + a++);
document.write("<br>");
document.write("Now the value of a is " + a);
document.write("<br>");
document.write("<br>");

document.write("The value of --a is " + --a);
document.write("<br>");
document.write("Now the value of a is " + a);
document.write("<br>");
document.write("<br>");

document.write("The value of a-- is " + a--);
document.write("<br>");
document.write("Now the value of a is " + a);
document.write("<br>");
document.write("<br>");
document.write("<br>");

// Question no: 02

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is " + a)
document.write("<br>");
document.write("b is " + b)
document.write("<br>");
document.write("result is  " + result)
document.write("<br>");
document.write("<br>");
document.write("<br>");

// Question no: 03

var user = "Abdul Rafay "
document.write("Hello, " + user + "! Welcome to our website.");
document.write("<br>");
document.write("<br>");

// Question no: 05

var num = 5;

var table = "<h2>Multiplication Table of " + num + "</h2>";
table += num + " x 1 = " + (num * 1) + "<br>";
table += num + " x 2 = " + (num * 2) + "<br>";
table += num + " x 3 = " + (num * 3) + "<br>";
table += num + " x 4 = " + (num * 4) + "<br>";
table += num + " x 5 = " + (num * 5) + "<br>";
table += num + " x 6 = " + (num * 6) + "<br>";
table += num + " x 7 = " + (num * 7) + "<br>";
table += num + " x 8 = " + (num * 8) + "<br>";
table += num + " x 9 = " + (num * 9) + "<br>";
table += num + " x 10 = " + (num * 10) + "<br>";
document.write(table)
document.write("<br>");
document.write("<br>");

// Question no: 06

var english = "English";
var math = "Math";
var urdu = "Urdu";

document.getElementById("english").innerHTML = english
document.getElementById("math").innerHTML = math
document.getElementById("urdu").innerHTML = urdu

var totalMarkEnglish = 100;
var totalMarkMAth = 100;
var totalMarkUrdu = 100;

document.getElementById("totalMarkEnglish").innerHTML = totalMarkEnglish
document.getElementById("totalMarkMAth").innerHTML = totalMarkMAth
document.getElementById("totalMarkUrdu").innerHTML = totalMarkUrdu

var obtainedMarksInEnglish = 54;
var obtainedMarksInMath = 54;
var obtainedMarksInUrdu = 48;

document.getElementById("obtainedMarksInEnglish").innerHTML = obtainedMarksInEnglish
document.getElementById("obtainedMarksInMath").innerHTML = obtainedMarksInMath
document.getElementById("obtainedMarksInUrdu").innerHTML = obtainedMarksInUrdu

var precentageEnglish = ((obtainedMarksInEnglish * 100 )/ totalMarkEnglish) + "%"
document.getElementById("precentageEnglish").innerHTML = precentageEnglish
var precentageMath = ((obtainedMarksInMath * 100) / totalMarkMAth);
document.getElementById("precentageMath").innerHTML = precentageMath  + "%"
var precentageUrdu = ((obtainedMarksInUrdu * 100) / totalMarkUrdu);
document.getElementById("precentageUrdu").innerHTML = precentageUrdu  + "%"

var totalMarks = 300;
document.getElementById("totalMarks").innerHTML = totalMarks
var totalObtaintedMarks = obtainedMarksInEnglish + obtainedMarksInMath + obtainedMarksInUrdu
document.getElementById("totalObtaintedMarks").innerHTML = totalObtaintedMarks
document.getElementById("totalPrecentage").innerHTML = totalObtaintedMarks * 100 / 300 + "%"; 

