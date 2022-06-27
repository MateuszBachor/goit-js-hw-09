const body = document.querySelector("body");
const startBtn = document.querySelector("button")
const stopBtn = document.querySelector("#stopBtn")
let timerId = null;
// startBtn.style.margin="50%"
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  startBtn.addEventListener("click", () => {
        startBtn.setAttribute("disabled","" )
   timerId = setInterval(() => {
        body.style.background = getRandomHexColor();
      }, 1000);
});
  stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
startBtn.removeAttribute("disabled")
  });