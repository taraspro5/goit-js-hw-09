import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const selectors = {
  selectDate: document.querySelector('#datetime-picker'),
  day: document.querySelector('[data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]'),
  btn: document.querySelector('button'),
};

let currentTime = new Date();
let timeToChange = null;
selectors.btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < currentTime) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    timeToChange = selectedDates[0] - currentTime;
    selectors.btn.disabled = false;
  },
};

flatpickr(selectors.selectDate, options);
selectors.btn.addEventListener('click', handlerStart);

function handlerStart() {
  let intervalId = setInterval(() => {
    selectors.day.textContent = addLeadingZero(convertMs(timeToChange).days);
    selectors.hour.textContent = addLeadingZero(convertMs(timeToChange).hours);
    selectors.minute.textContent = addLeadingZero(
      convertMs(timeToChange).minutes
    );
    selectors.second.textContent = addLeadingZero(
      convertMs(timeToChange).seconds
    );
    if (
      (selectors.day.textContent === '00') &
      (selectors.hour.textContent === '00') &
      (selectors.minute.textContent === '00') &
      (selectors.second.textContent === '00')
    ) {
      clearInterval(intervalId);
    }
    timeToChange -= 1000;
    convertMs(timeToChange);
  }, 1000);
}

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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
