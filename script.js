let timer;
let isRunning = false;
let workTime = 25;
let breakTime = 5;
let timeLeft = workTime * 60;

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

document.getElementById('work-time').addEventListener('change', function () {
    workTime = parseInt(this.value);
    if (!isRunning) {
        timeLeft = workTime * 60;
        updateDisplay();
    }
});

document.getElementById('break-time').addEventListener('change', function () {
    breakTime = parseInt(this.value);
});

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(updateTime, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = workTime * 60;
    updateDisplay();
}

function updateTime() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        isRunning = false;
        alert('Time is up!');
        return;
    }
    timeLeft--;
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('time-display').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
