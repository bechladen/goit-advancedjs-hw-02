import '../css/2-snackbar.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = parseInt(event.target.delay.value);
  const state = event.target.state.value;

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        res(delay);
      } else {
        rej(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: '✅ Fulfilled',
        message: `Promise in ${delay}ms`,
        position: 'topRight',
        theme: 'dark',
        icon: '',
        progressBar: false,
        backgroundColor: '#66bc5d',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '❌ Rejected',
        message: `Promise in ${delay}ms`,
        position: 'topRight',
        theme: 'dark',
        icon: '',
        progressBar: false,
        backgroundColor: '#d61e1ec4',
      });
    });
});
