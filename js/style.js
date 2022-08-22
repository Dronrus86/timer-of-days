
function time() {
    let data1 = new Date();
    let data2 = new Date("2022, 12, 31")
    let sec = (data2 - data1) / 1000
    let min = sec / 60
    let hour = min / 60
    let day = hour / 24

    min = (hour - Math.floor(hour)) * 60;
    day = Math.floor(day);
    hour = Math.floor(hour) - day * 24;
    sec = Math.floor((min - Math.floor(min)) * 60);
    min = Math.floor(min);


    console.log(min)

    const days = document.querySelector('.day_text');
    days.innerHTML = day;
    const haurs = document.querySelector('.hour_text');
    haurs.innerHTML = hour;
    const mins = document.querySelector('.min_text');
    mins.innerHTML = min;
    const secs = document.querySelector('.sec_text');
    secs.innerHTML = sec;
}

setInterval(time, 1000);
