function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector("input");
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const collections = document.querySelector('#boxes');


const destroy = () => collections.innerHTML = '';

const createBox = (size) => {
  const box = document.createElement('div');
  box.style.width = `${30 + 10 * (size - 1)}px`;
  box.style.height = `${30 + 10 * (size -1)}px`;
  box.style.backgroundColor = getRandomHexColor();

  return box;
}

const create = () => {
  destroy();

  const amount = input.value;

  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    input.value = '';
    return;
  }

  const boxes = Array.from({ length: amount }, (_, index) => createBox(index + 1));
  collections.append(...boxes);

  input.value = '';
}

buttonCreate.addEventListener('click', create);
buttonDestroy.addEventListener('click', destroy);

