// Question no: 1

var firstName = prompt("Enter your first name.", "Abdul")
var lastName = prompt("Enter your last name." , "Rafay")
var fullName = "Hello! " + firstName + " "+ lastName + " Welcome to our website"
alert(fullName)

// Question no: 2

var favoritePhone = "Samsung Galaxy S6 Edge Plus "
document.write("<h3>My favorite phone is: Samsung Galaxy S6 Edge Plus</h3>");
var lengthOfPhoneName = favoritePhone.length
document.write("<h3>Length of String: "+lengthOfPhoneName+"</h3>" );

// Question no: 3

var century = "Pakistani"
document.write("<h3>String: Pakistani </h3>");
var lengthOfCentury = century.indexOf("n")
document.write("<h3>Index of 'n':"+lengthOfCentury+" </h3>");

// Question no: 4

var century = "Hello World"
document.write("<h3>String: Hello World </h3>");
var lengthOfCentury = century.lastIndexOf("l")
document.write("<h3>Last index of 'l':"+lengthOfCentury+" </h3>");


// Question no: 5

var century = "Pakistani"
document.write("<h3>String: Pakistani </h3>");
var lengthOfCentury = century.slice(3,4)
document.write("<h3>Character at index 3: "+lengthOfCentury+" </h3>");

// Question no: 7

var city = "Hyderabad"
document.write("<h3>City: Hyderabad </h3>");
var afterReplace = city.replace("Hyderabad" ,"Islamabad")
document.write("<h3>After replacement: "+ afterReplace + " </h3>");

// Question no: 8

var message = "Ali and Sami are best friends. They play cricket and football together."
var globalReplace = message.replace(/and/g , "&")
document.write("<h3>"+globalReplace+"</h3>");

// Question no: 9

var value = "472"
document.write("<h3> Value: <br>"+value+"</h3>");
document.write("<h3> Type: <br>"+typeof(value)+"</h3>");
var value = parseInt(value)
document.write("<h3> Value: <br>"+parseInt(value) +"</h3>");
document.write("<h3> Type: <br>"+typeof(value)+"</h3>");

// Question no: 10

var upperCase = "peanuts"
document.write("<h3> User input: "+upperCase+"</h3>");
document.write("<h3> Upper case: "+upperCase.toUpperCase()+"</h3>");

// Question no: 11

var fisrtLetter = "javascript"
document.write("<h3> Upper case: "+fisrtLetter+"</h3>");
var fisrtLetterUpperCase = fisrtLetter.slice(0,1)
document.write("<h3> User input: " +fisrtLetterUpperCase.toUpperCase() +fisrtLetter.slice(1)+"</h3>");

// Question no: 12

var num = 35.36;
var str = num.toString(); 
var result = str.replace(".", ""); 
document.write("<h3> Number: "+ num +"</h3>");
document.write("<h3> Result: "+result+"</h3>");

// Question no: 16

var university = "University of Karachi";
for (var i = 0; i < university.length; i++) {
    document.write("<h4>"+university[i]+"</ h4>");
}

// Question no: 17

var userInput = "Pakistan";
for (var i = 0; i < userInput.length; i++) {
    lastIndex = userInput[i]
}
document.write("<h4>User input: " + userInput + "</ h4>");
document.write("<h4>Last character of input: " + lastIndex + "</ h4>");


// Question no: 18

var str = "the quick brown fox jumps over the lazy dog";
var words = str.split(" ");
var count = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}
document.write("<h3>The quick brown fox jumps over the lazy dog</ h3>");
document.write("<h3>There are " +count+ " occurrence(s) of word 'the'</h3>");

