var day = new Date().getDate();
var month = new Date().getMonth();
var year = new Date().getFullYear();
var weekDay = new Date().getDay();


var greetings = "";
var mon="";
var weekDayy="";

const time = document.getElementById("time");
const greet = document.querySelector(".welcome h2");
const date = document.querySelector(".date");


switch (month+1){
    case 1 : mon="January"; break;
    case 2 : mon="February"; break;
    case 3 : mon="March"; break;
    case 4 : mon="April"; break;
    case 5 : mon="May"; break;
    case 6 : mon="June"; break;
    case 7 : mon="July"; break;
    case 8 : mon="August"; break;
    case 9 : mon="September"; break;
    case 10 : mon="October"; break;
    case 11 : mon="November"; break;
    case 12 : mon="December"; break;
}

switch(weekDay + 1){
    case 1 : weekDayy = "Monday"; break;
    case 2 : weekDayy = "Tuesday"; break;
    case 3 : weekDayy = "Wednesday"; break;
    case 4 : weekDayy = "Thursday"; break;
    case 5 : weekDayy = "Friday"; break;
    case 6 : weekDayy = "Saturday"; break;
    case 7 : weekDayy = "Sunday"; break;
}

if(day === 1){
    var newDay = day + "st ";
}
else if(day === 2){
    var newDay = day + "nd ";
}
else if(day === 3){
    var newDay = day + "rd ";
}
else {
    var newDay = day + "th ";
}

date.innerHTML = newDay + ", " + mon + " " + year + " " + weekDayy;

reload();

function reload(){
    var hours = new Date().getHours();
    // const hours = 18;
    var min = new Date().getMinutes();
    if(hours >=0 && hours<12){
        time.innerHTML = ("0" + hours).slice(-2) + ':' +("0" + min).slice(-2);
        greetings = "Good Morning, Varshmaan Sonkar.";
    } 
    
    else if(hours>=12 && hours<16){
    
        greetings = "Good Afternoon, Varshmaan Sonkar.";
    
        if(hours >12 ){
            time.innerHTML = ("0" + (hours-12)).slice(-2) + ':' + ("0" + min).slice(-2);
        } else {
            time.innerHTML = ("0" + hours).slice(-2) + ':' + ("0" + min).slice(-2);
        }
    } 
    
    else if(hours >=16 && hours<21) {
        time.innerHTML = ("0" + (hours-12)).slice(-2) + ':' + ("0" + min).slice(-2);
        greetings="Good Evening, Varshmaan Sonkar.";
    } 
    
    else {
        time.innerHTML = ("0" + (hours-12)).slice(-2) + ':' + ("0" + min).slice(-2);
        greetings="Good Night, Varshmaan Sonkar."
    
    }
    
    console.log(min);

    greet.innerHTML = greetings;
    setTimeout(() => {
        reload();
    }, 1000);
}