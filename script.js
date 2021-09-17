 const newyr = "1 jan 2022";

 function countdown() {
     const nydate = new Date(newyr);
     const curdate = new Date();

     const totalSeconds = (nydate - curdate) / 1000;

     const days = Math.floor(totalSeconds / 3600 / 24);
     const hours = Math.floor(totalSeconds / 3600) % 24;
     const mins = Math.floor(totalSeconds / 60) % 60;
     const seconds = Math.floor(totalSeconds) % 60;
     //  console.log(days, hours, mins, seconds);
     console.log(days, hours, mins, seconds);
     console.log(document.querySelector(".days .big"));
     document.querySelector(".days .big").innerHTML = format(days);
     document.querySelector(".hours .big").innerHTML = format(hours);
     document.querySelector(".minutes .big").innerHTML = format(mins);
     document.querySelector(".seconds .big").innerHTML = format(seconds);
 }

 function format(x) {
     return x < 10 ? `0${x}` : x;
 }
 countdown();
 setInterval(countdown, 1000)