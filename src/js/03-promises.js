import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', handlerStart);
let position = null;

function handlerStart(evt) {
  evt.preventDefault();
  const amount = Number(form.elements.amount.value);
  const step = Number(form.elements.step.value);
  let delay = Number(form.elements.delay.value);
  for (let i = 1; i <= amount; i++) {
    position = i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
  form.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
