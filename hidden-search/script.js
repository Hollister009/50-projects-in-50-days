const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});

function onChange(e) {
  console.log(e.target.value);
}

const debounce = (fn, ms = 0) => {
  let timeout;

  return function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, ms);
  };
};

input.addEventListener('keyup', debounce(onChange, 500));