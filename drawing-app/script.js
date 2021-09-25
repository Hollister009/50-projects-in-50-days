const canvas = document.getElementById('canvas');
const colorInput = document.getElementById('color');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const clearBtn = document.getElementById('clear');
const sizeEl = document.querySelector('.size');
const ctx = canvas.getContext('2d');

let isPressed = false;
let size = Number(sizeEl.textContent) || 10;
let color = colorInput.value || 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
  isPressed = false;
  x = null;
  y = null;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const [x2, y2] = [e.offsetX, e.offsetY];

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    [x, y] = [x2, y2];
  }
});

increaseBtn.addEventListener('click', () => {
  if (size < 50) {
    size += 5;
    updateSizeOnScreen();
  }
});

decreaseBtn.addEventListener('click', () => {
  if (size > 5) {
    size -= 5;
    updateSizeOnScreen();
  }
});

colorInput.addEventListener('change', (e) => {
  color = e.target.value;
});

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEl.textContent = size;
}
