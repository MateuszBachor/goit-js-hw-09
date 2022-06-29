
const form = document.querySelector('.form');

const delayd = document.querySelector('[name="delay"]');
const stepd = document.querySelector('[name="step"]');
const amountd = document.querySelector('[name="amount"]');



function idk(event) {

  event.preventDefault();

  let delay = parseInt(delayd.value,10)
  const step = parseInt(stepd.value,10)
  const amount = parseInt(amountd.value,10)

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(
          `✅ Fulfilled promise ${i} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(
          `❌ Rejected promise ${i} in ${delay}ms`
        );
      });
    delay = delay + step;
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', idk);