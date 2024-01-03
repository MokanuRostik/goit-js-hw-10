// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// ===============================================================
let userSelectedDate = 0;
const buttonStart = document.querySelector('button');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

const newDate = Date.now();
buttonStart.disabled = true;
const inputEl = document.getElementById('datetime-picker');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    console.log(userSelectedDate);
    if (userSelectedDate < Date.now()) {
      alert('Please choose a date in the future');
      buttonStart.disabled = true;
    }
    if (userSelectedDate > Date.now()) {
      buttonStart.disabled = false;
    }
    const dateFinish = userSelectedDate - newDate;

    const { days, hours, minutes, seconds } = convertMs(dateFinish);
    buttonStart.addEventListener('click', e => {
      setInterval(() => {
        dataDays.textContent = days;
        dataHours.textContent = hours;
        dataMinutes.textContent = minutes;
        dataSeconds.textContent = seconds;
      }, 1000);
      console.log(dateFinish);
    });
  },
};
flatpickr(inputEl, options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
