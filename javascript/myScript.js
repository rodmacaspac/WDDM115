// variable x serves as a randomizer for baby's gender with output 1 or 0
// defined gender variable for global use
var x = Math.floor(Math.random() * 2);
//display the value of x
console.log("Value of x is: " + x)
var gender;

// if else statement for displaying congratulatory message based on the ramdom number generated above
if (x > 0){
    gender = "Congratulations, It is a GIRL!"
    console.log("based on the value of x, gender is: " + gender)
    var response = "Yes, its a Girl"
}

else {
    gender = "Congratulations, It is a BOY!"
    console.log("based on the value of x, gender is: " + gender)
    var response = "Yes, its a Boy"
}

//dispays the message on the website
function ChangeBackground() {
    document.getElementById('question').innerHTML = gender;
}

//display initial value of 0 
const y = 0
let sum = x + y
//Use ++ operator then combine mulitple strings
sum++;
console.log("The value of X plus one is: " + sum + "\n" + "and the gender is... " + response);



