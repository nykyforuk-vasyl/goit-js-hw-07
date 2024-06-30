function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100 ) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

function createBoxes(amount) {
  boxes.innerHTML = '';
const fragment = document.createDocumentFragment();
  let size = 30;
  let margin = 2;
  
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = `${margin}px`;
    fragment.appendChild(box);
    size += 10;
    margin += 2;
}
  boxes.appendChild(fragment);
}


destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
}