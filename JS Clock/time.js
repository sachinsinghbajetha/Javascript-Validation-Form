/* 
simple clock
let a;
let time;
let date;
setInterval(() => {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date = a.toLocaleDateString(undefined, options);
    document.getElementById('time').innerHTML = date + '<br>' + time;
}, 1000);
*/

// better clock 
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date = time.toLocaleDateString(undefined, options);

    let currentTime = date + '<br>' + hour + ":" + min + ":" + sec + " " + am_pm;

    document.getElementById("time").innerHTML = currentTime;
}
showTime();
