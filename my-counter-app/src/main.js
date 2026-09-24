import './style.css';

let count = 0;

document.querySelector('#app').innerHTML = `
  <div class="counter">
    <h1>カウンターアプリ</h1>

    <p id="count">0</p>

    <div class="buttons">
      <button id="decrease">-</button>
      <button id="reset">リセット</button>
      <button id="increase">+</button>
    </div>
  </div>
`;

const countDisplay = document.querySelector('#count');

document.querySelector('#increase').addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

document.querySelector('#decrease').addEventListener('click', () => {
  count--;
  countDisplay.textContent = count;
});

document.querySelector('#reset').addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
});