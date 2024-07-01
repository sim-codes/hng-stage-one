const time = document.querySelector('.time');
const day = document.querySelector('.day');

window.onload = function() {
    const date = new Date();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    const dayOfWeek = date.getDay();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    
    time.innerHTML = `${hours}:${minutes}:${seconds}`;
    day.innerHTML = `${days[dayOfWeek]}`;
}