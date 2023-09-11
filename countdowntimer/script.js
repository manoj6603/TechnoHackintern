let countdown;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
let isCountdownRunning = false;
let totalSeconds = 0;

function startCountdown() {
    if (!isCountdownRunning) {
        const hoursInput = document.getElementById('hours');
        const minutesInput = document.getElementById('minutes');
        const secondsInput = document.getElementById('seconds');

        const hours = parseInt(hoursInput.value);
        const minutes = parseInt(minutesInput.value);
        const seconds = parseInt(secondsInput.value);

        if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || hours < 0 || minutes < 0 || seconds < 0) {
            alert('Please enter valid positive numbers for hours, minutes, and seconds.');
            return;
        }

        totalSeconds = hours * 3600 + minutes * 60 + seconds;
        isCountdownRunning = true;
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = true;

        countdown = setInterval(updateTimer, 1000);
    }
}

function stopCountdown() {
    clearInterval(countdown);
    isCountdownRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function resetCountdown() {
    clearInterval(countdown);
    isCountdownRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    totalSeconds = 0;
    timerDisplay.textContent = '00:00:00';
}

function updateTimer() {
    const hoursRemaining = Math.floor(totalSeconds / 3600);
    const minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
    const secondsDisplay = totalSeconds % 60;

    const display = `${hoursRemaining.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}:${secondsDisplay.toString().padStart(2, '0')}`;
    timerDisplay.textContent = display;

    if (totalSeconds === 0) {
        clearInterval(countdown);
        isCountdownRunning = false;
        startButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = true;
        alert('Countdown completed!');
    } else {
        totalSeconds--;
    }
}
