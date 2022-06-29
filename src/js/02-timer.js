import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('button[data-start]');
 let datetimePicker = document.querySelector("#datetime-picker")



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
          startBtn.disabled = true;
          window.alert('Please choose a date in the future');
        } else {
          startBtn.disabled = false;

         function countDown(){
            startBtn.disabled = true;
           setInterval(() => {
            let dateChosen = datetimePicker.getAttribute("value")
            dateChosen = new Date(dateChosen)
            let now = new Date()
            let diff = dateChosen - now;
           const d = Math.floor(diff / 1000 / 60 / 60 / 24);
           const h = Math.floor(diff / 1000 / 60 / 60) % 24;
           const m = Math.floor(diff / 1000 / 60 ) % 60;
           const s = Math.floor(diff / 1000) % 60;

           days.innerHTML = d;
           hours.innerHTML = h < 10 ? '0' + h : h;
           minutes.innerHTML = m < 10 ? '0' + m : m;
           seconds.innerHTML = s < 10 ? '0' + s : s;
         if (diff < 1000) {
            clearInterval(timer);
            startBtn.disabled = false;
          }
        }, 1000);
      }
          startBtn.addEventListener('click', countDown);
        }
    }
} 
flatpickr("#datetime-picker", options);

