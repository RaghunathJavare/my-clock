"use strick";

const currentTime = document.querySelector(".clock__time");
const iconContainer = document.querySelector(".app__icons");
const content = document.querySelectorAll(".content");

iconContainer.addEventListener("click", function (e) {
  const event = e.target;

  if (event.classList.contains("icons")) {
    content.forEach((c) => c.classList.add("unactive--content"));
    document
      .querySelector(`.app__content--${event.dataset.tab}`)
      .classList.remove("unactive--content");
  }
});

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
