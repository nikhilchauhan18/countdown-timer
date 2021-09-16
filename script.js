 const newyr = "1 jan 2022";

 function countdown() {
     const nydate = new Date(newyr);
     const curdate = new Date();
     const seconds = (nydate - curdate) * 1000;
 }
 countdown();
 //  setInterval(countdown, 1000)