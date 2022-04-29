function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var session = "A.M.";

    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "P.M.";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}



function showDate(){
    var date = new Date();
    var dayW = date.getDay();
    var dayM = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    if(dayW === 0){
        dayW = "Sunday";
    }else if(dayW === 1){
        dayW = "Monday";
    }else if(dayW === 2){
        dayW = "Tuesday";
    }else if(dayW === 3){
        dayW = "Wednesday";
    }else if(dayW === 4){
        dayW = "Thursday";
    }else if(dayW === 5){
        dayW = "Friday";
    }else if(dayW === 6){
        dayW = "Saturday";
    }

    if(month === 0){
        month = "January";
    }else if (month === 1){
        month = "February";
    }else if (month === 2){
        month = "March";
    }else if (month === 3){
        month = "April";
    }else if (month === 4){
        month = "May";
    }else if (month === 5){
        month = "June";
    }else if (month === 6){
        month = "July";
    }else if (month === 7){
        month = "August";
    }else if (month === 8){
        month = "September";
    }else if (month === 9){
        month = "October";
    }else if (month === 10){
        month = "November";
    }else if (month === 11){
        month = "December";
    }

    var todaysDate = dayW + ", " + month + " " + dayM + ", " + year;
    document.getElementById("MyDateDisplay").innerText = todaysDate;
    document.getElementById("MyDateDisplay").textContent = todaysDate;

    setTimeout(showTime, 1000);
}

showTime();
showDate();