import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let countdownInterval;
const buttonStart = document.querySelector('button');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');
buttonStart.disabled = true;

const inputEl = document.getElementById('datetime-picker');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < Date.now()) {
      alert('Please choose a date in the future');
      buttonStart.disabled = true;
      clearInterval(countdownInterval);
    } else {
      buttonStart.disabled = false;
      buttonStart.addEventListener('click', () => {
        countdownInterval = setInterval(() => {
          const timeDifference = selectedDate.getTime() - Date.now();

          if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            return;
          }

          const { days, hours, minutes, seconds } = convertMs(timeDifference);

          dataDays.textContent = days.toString().padStart(2, '0');
          dataHours.textContent = hours.toString().padStart(2, '0');
          dataMinutes.textContent = minutes.toString().padStart(2, '0');
          dataSeconds.textContent = seconds.toString().padStart(2, '0');
          buttonStart.disabled = true;
        }, 1000);
      });
    }
  },
};

flatpickr(inputEl, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}
