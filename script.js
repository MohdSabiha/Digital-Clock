function updateclock(){
    let present = new Date();
    let dayname= present.getDay(),
    month = present.getMonth(),
    date = present.getDate(),
    year = present.getFullYear(),
    hours = present.getHours(),
    min = present.getMinutes(),
    sec = present.getSeconds(),
    period = "AM";

let months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if(hours ==0){
    hours=12;
}

if(hours>12){
    period ="PM";
}

hours = (hours<10)? "0" + hours:hours;
min = (min<10)? "0" + min : min;
sec = (sec<10)? "0" + sec : sec;

document.querySelector("#dayname").innerHTML = days[dayname];
document.querySelector("#month").innerHTML = months[month];
document.querySelector("#daynum").innerHTML = date;
document.querySelector("#year").innerHTML = year;
document.querySelector("#hour").innerHTML = hours;
document.querySelector("#minute").innerHTML = min;
document.querySelector("#seconds").innerHTML = sec;
document.querySelector("#period").innerHTML = period;
}


function clock(){
    updateclock();
    window.setInterval("updateclock()", 1);
}

clock();