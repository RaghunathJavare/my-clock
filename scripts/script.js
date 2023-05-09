const currentTime = document.querySelector(".clock__time");

// timer

(function () {
  setInterval(function () {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, 0);
    const min = String(time.getMinutes()).padStart(2, 0);
    const sec = String(time.getSeconds()).padStart(2, 0);
    currentTime.textContent = `${hour}:${min}:${sec}`;
  }, 1000);
})();



