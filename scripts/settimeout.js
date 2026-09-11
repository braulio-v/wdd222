const countdown = document.querySelector('#countdown');
const startButton = document.querySelector('#startButton');

let timeLeft = 10;

startButton.addEventListener('click', function () {
    setInterval(() => {
        if (timeLeft >= 0) {
            countdown.textContent = timeLeft;
            timeLeft = timeLeft -1;   // timeLeft--;
        } else {
            setTimeout(() => {
                countdown.textContent = "Time's up!";
            }, 1000);
        }
    }, 1000);
});