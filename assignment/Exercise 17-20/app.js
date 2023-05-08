// Question no: 1

var multiArray = [[1, 2, 3], [4, 5, 6], [7, 8 ,9]];

// Question no: 2  

var multiArray = [[1, 2, 3], [4, 5, 6], [7, 8 ,9]];
document.write(""+multiArray[0].join("&nbsp&nbsp"));
document.write("<br>")
document.write(""+multiArray[1].join("&nbsp&nbsp"));
document.write("<br>")
document.write(""+multiArray[2].join("&nbsp&nbsp"));
document.write("<br>")
document.write("<br>")

// Question no: 3 

for (var i = 1; i <=10; i++){
    document.write(i);
    document.write("<br>")
}
document.write("<br>")

// Question no: 4

var table = +prompt("Enter a number to show its multiplication table" , "4");
for (var i = 1; i <=10 ; i++){
    document.write(table+ " * " + i + " = " + table*i);
    document.write("<br>")
}
var table = +prompt("Enter a number to show its multiplication table" , "5");
var length = +prompt("Enter a length multiplication table" ,"15");
document.write("<h2>Multiplication table of " + table + " Length " + length + "</h2>");
document.write("<br>")
for (var i = 1; i <=length ; i++){
    document.write(table+ " * " + i + " = " + table*i);
    document.write("<br>")
}
document.write("<br>")

// Question no: 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i <=fruits.length - 1 ; i++){
    document.write(fruits[i]);
    document.write("<br>")
}
document.write("<br>")
document.write("Element at index 0 is " + fruits[0]);
document.write("<br>")
document.write("Element at index 1 is " + fruits[1]);
document.write("<br>")
document.write("Element at index 2 is " + fruits[2]);
document.write("<br>")
document.write("Element at index 3 is " + fruits[3]);
document.write("<br>")
document.write("Element at index 4 is " + fruits[4]);
document.write("<br>")
document.write("<br>")
// Question no: 6

var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
document.write("<h3>Counting: </h3>"+counting);
document.write("<br>")
var reverseCounting =  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
document.write("<h3>Reverse counting: </h3>"+reverseCounting);
document.write("<br>")
var even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
document.write("<h3>Even: </h3>"+even);
document.write("<br>")
var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
document.write("<h3>Odd: </h3>"+odd);
document.write("<br>")
var series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k","18k","20k"]
document.write("<h3>Odd: </h3>"+ series);
document.write("<br>")

// Question no: 7

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var abc = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?" , "cookie")
var initial =  false;
for(var i = 0; i <bakery.length ; i++){
    if(bakery[i] === abc ){
        initial = true;
        alert(abc + " is avaiable at index " + i + " in our bakery")
        break;
    }
}
if(initial === false){
    alert("We are sorry. " + abc + " is not avaiable in our bakery" )
}

// Question no: 8

var largestNumber = [24, 53, 78, 91, 12];
document.write("<h3>Array items: </h3>" + largestNumber);
var largest = 0;
for (var i = 0; i < largestNumber.length; i++) {
    if (largestNumber[i] > largest) {
        largest =  largestNumber[i];
    }
}
document.write("<br>")
document.write("<h3>The largest number is " + largest+"</h3>");


// Question no: 9

var smallestNumber = [24, 53, 78, 91, 12];
document.write("<h3>Array items: " + smallestNumber + "</h3>");
var smallest = smallestNumber.sort()
smallest = smallest[0]
document.write("<h3>The largest number is " + smallest + "</h3>");

// // Question no: 10

for (var i = 1; i <=100; i++){
    if(i % 5 === 0){
        document.write(i);
        document.write("<br>");
        
    }
}
