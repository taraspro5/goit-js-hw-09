import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', handlerStart);
let position = null;
const { delay, step, amount } = form.elements;

function handlerStart(evt) {
  evt.preventDefault();
  let del = Number(delay.value);
  let st = Number(step.value);
  for (let i = 1; i <= Number(amount.value); i++) {
    position = i;
    createPromise(position, del);
    del += st;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let promise = new Promise((resolve, reject) => {
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

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
