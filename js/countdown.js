//create a date object and set the time to the day you want it to count down to
//getTime is to get the timestamp in milliseconds 
var countDownDate = new Date ("Mar 9,2024").getTime();

//set an interval that is executed every one second (1000millisecond)
var x = setInterval(function(){

//this collects the current date and time and assigns it to the variable now
var now = new Date().getTime();

//this calculates the difference
var distance = countDownDate - now;

//calculation fot days, hours, minutes and seconds
var days = Math.floor(distance/ (1000 * 60 * 60 * 24));
var hours = Math.floor((distance %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//this will display the updated time in the html file 
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
},1000);