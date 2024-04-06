// script.js
function updateClock() {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time; // Add leading zero if needed
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update to prevent delay in showing the clock
updateClock();
