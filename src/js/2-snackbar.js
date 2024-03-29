function createPromise(event) {
  event.preventDefault();
  const form = document.querySelector('.form');
  const delay = form.delay.value;

  const state = document.querySelector('input[name="state"]:checked').value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(value => {
      console.log(`✅ Fulfilled promise in ${value}ms`);
    })
    .catch(value => {
      console.log(`❌ Rejected promise in ${value}ms`);
    });
}

const form = document.querySelector('.form');
form.addEventListener('submit', createPromise);
