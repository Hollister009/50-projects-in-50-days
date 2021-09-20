const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

const circlesAmount = circles.length;
let currentActive = 1;

const update = () => {
  const active = document.querySelectorAll('.active');

  progress.style.width = `${((active.length - 1) / (circlesAmount - 1)) * 100}%`;

  if (currentActive === circlesAmount) {
    next.disabled = true;
  } else if (currentActive === 1) {
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};

prev.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
    circles.forEach((circle, idx) => {
      if (idx + 1 <= currentActive) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });

    update();
  }
});

next.addEventListener('click', () => {
  if (currentActive < circlesAmount) {
    currentActive++;
    circles.forEach((circle, idx) => {
      if (idx + 1 <= currentActive) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });

    update();
  }
});
