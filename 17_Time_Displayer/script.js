const clock = document.getElementById('clock');

function updateTime(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    conti();
}

clock.addEventListener('click', updateTime);

function conti(){
    setInterval(updateTime, 1000);
}
