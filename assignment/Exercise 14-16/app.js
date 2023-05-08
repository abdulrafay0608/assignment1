// Exercise no: 14 to 16
// Questoin no: 1

var studentName = []

// Questoin no: 3

var strArr = ["rafay", "ali", "noman", "namir", "faiz"]

// Questoin no: 4

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Questoin no: 5

var boolean = [true, false, true]

// Questoin no: 6

var mixArr = ["ali", 5, "noman", 6, false, 7, "namir"]

// Questoin no: 7
document.write("<h2>Qualifications:</h2>")
var qualifications = ["1) SSC", "2) HSC", "3) BCS", "4) BS", "5) BCOM", "6) MS", "7) M. Phil", "8) PhD"]
for (var i = 1; i < qualifications.length; i++) {
    document.write(qualifications[i])
    document.write("<br>")
}
document.write("<br>")
document.write("<br>")

// Questoin no: 8

var nameArr = ["Michael", "John", "Tony"]
var scoreArr = [320, 230, 480]
var firstStudent = "Score of " + nameArr[0] + " is " + scoreArr[0] + ". Percentage " + scoreArr[0] * 100 / 500 + "%";
var secondStudent = "Score of " + nameArr[1] + " is " + scoreArr[1] + ". Percentage " + scoreArr[1] * 100 / 500 + "%";
var thirdStudent = "Score of " + nameArr[2] + " is " + scoreArr[2] + ". Percentage " + scoreArr[2] * 100 / 500 + "%";
document.write(firstStudent);
document.write("<br>")
document.write(secondStudent);
document.write("<br>")
document.write(thirdStudent);
document.write("<br>")
document.write("<br>")

// Questoin no: 10

var sortArr = [320, 230, 480, 120]
document.write("Score of students: " + sortArr);
document.write("<br>")
document.write("Ordered Score of Students: " + sortArr.sort());
document.write("<br>")

// Questoin no: 11

var cities = ["Karachi", "Lohore", "Islamabad", "Quetta", "Peshawar"]
document.write("<h3>Cities list: </h3>" + cities);
document.write("<h3>Selected cities list: </h3>" + cities[3]);
document.write("<br>")

// Questoin no: 12

var arr = ["This", " is", " my", " cat"];
document.write("<h3>Array: </h3>" + arr);
document.write("<h3>String: </h3>" + arr.join(""));
document.write("<br>")

// Questoin no: 13

var computerArr = ["keyboard", "mouse", "pinter", "monitor"]
document.write("<h3>Devices: </h3>" + computerArr);
document.write("<br>")
document.write("Out: <br>" + computerArr[0]);
document.write("<br>")
document.write("Out: <br>" + computerArr[1]);
document.write("<br>")
document.write("Out: <br>" + computerArr[2]);
document.write("<br>")
document.write("Out: <br>" + computerArr[3]);
document.write("<br>")

// Questoin no: 14

var computerArr = ["keyboard", "mouse", "pinter", "monitor"]
document.write("<h3>Devices: </h3>" + computerArr.reverse());
document.write("Out: <br>" + computerArr[0]);
document.write("<br>")
document.write("Out: <br>" + computerArr[1]);
document.write("<br>")
document.write("Out: <br>" + computerArr[2]);
document.write("<br>")
document.write("Out: <br>" + computerArr[3]);
document.write("<br>")
document.write("<br>")

// Questoin no: 15

var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write(phone[0]);
document.write("<br>")
document.write(phone[1]);
document.write("<br>")
document.write(phone[2]);
document.write("<br>")
document.write(phone[3]);
document.write("<br>")
document.write(phone[4]);
document.write("<br>")
document.write(phone[5]);
document.write("<br>")
