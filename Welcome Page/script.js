var day = new Date().getDate();
var month = new Date().getMonth();
var year = new Date().getFullYear();
var weekDay = new Date().getDay();

var greetings = "";
var mon="";
var weekDayy="";
var userName = "User";

const time = document.getElementById("time");
const greet = document.getElementById("greetings");
const date = document.getElementById("date");
const Day = document.getElementById("day");


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

switch(weekDay){
    case 0 : weekDayy = "Monday"; break;
    case 1 : weekDayy = "Tuesday"; break;
    case 2 : weekDayy = "Wednesday"; break;
    case 3 : weekDayy = "Thursday"; break;
    case 4 : weekDayy = "Friday"; break;
    case 5 : weekDayy = "Saturday"; break;
    case 6 : weekDayy = "Sunday"; break;
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

date.innerHTML = newDay + ", " + mon + " " + year;
Day.innerHTML = weekDayy;

function openPopup(){
    document.getElementById('popup').classList.remove("visibility");
}

function closePopup(){
    document.getElementById('popup').classList.add("visibility");
}

function changeName(){
    
    document.getElementById('popup').classList.add("visibility");
    var temp = "";
    temp = document.getElementById('userName').value;

    if(temp === ""){        
        alert("Enter valid name");
    }
    else{
        userName=temp;
        window.localStorage.setItem('name', userName);
    }
}


reload();


function reload(){

    userName = localStorage.getItem('name');

    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    if(hours >=0 && hours<12){
        time.innerHTML = ("0" + hours).slice(-2) + ':' +("0" + min).slice(-2);
        greetings = "Good Morning, " + userName;
    } 
    
    else if(hours>=12 && hours<16){
    
        greetings = "Good Afternoon, " + userName;
    
        if(hours >12 ){
            time.innerHTML = ("0" + (hours-12)).slice(-2) + ':' + ("0" + min).slice(-2);
        } else {
            time.innerHTML = ("0" + hours).slice(-2) + ':' + ("0" + min).slice(-2);
        }
    } 
    
    else if(hours >=16 && hours<21) {
        time.innerHTML = ("0" + (hours-12)).slice(-2) + ':' + ("0" + min).slice(-2);
        greetings="Good Evening, " + userName;
    } 
    
    else {
        time.innerHTML = ("0" + (hours-12)).slice(-2) + ':' + ("0" + min).slice(-2);
        greetings="Good Night, " + userName;
    
    }

    greet.innerHTML = greetings;
    setTimeout(() => {
        reload();
    }, 1000);
}