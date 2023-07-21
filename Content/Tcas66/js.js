const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
const date = '2022-11-01T09:00:00.000+07:00';
let countDown = new Date(date).getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    if (document.querySelector('[data-days]') != null) {
      document.querySelector('[data-days]').innerText = Math.floor(distance / day);
    }

    if (document.querySelector('[data-hours]') != null) {
      document.querySelector('[data-hours]').innerText = Math.floor((distance % day) / hour);
    }

    if (document.querySelector('[data-minutes]') != null) {
      document.querySelector('[data-minutes]').innerText = Math.floor((distance % hour) / minute);
    }

    if (document.querySelector('[data-seconds]') != null) {
      document.querySelector('[data-seconds]').innerText = Math.floor((distance % minute) / second);
    }
  }, second);