// const timer = document.getElementById("timer");
// let countDown = setInterval(() => {
//     timer.textContent = timer.textContent - 1;
//     if (timer.textContent == 0) {
//         clearInterval(countDown);
//         alert('Вы победили!!!');
//     }
// }, 1000);


    const timer = document.getElementById("timer");
    let time = timer.textContent;
    formatTime (time);
    let countDown = setInterval(() => {
    time = time - 1;
    if (time == 0) {
        clearInterval(countDown);
        location.href = "https://drive.google.com/uc?export=download&id=1PfUJ4a_rWJD5SFkggM3lKkEf1cIQrb9c";
    }
    formatTime (time);
    }, 1000);


function formatTime (time) {
    let hours = Math.floor(time/3600);
    hours = hours < 10 ? `0${hours}` : `${hours}`;
    let minutes = Math.floor((time % 3600) / 60);
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let seconds = (time % 3600) % 60; 
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return  timer.textContent = `${hours}:${minutes}:${seconds}`
}