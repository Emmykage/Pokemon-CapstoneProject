import { pokedex } from './comments-popup';

const counter = document.querySelector('.counter');
function count() {
  for (let i = 1; i < pokedex; i += 1) {
    counter.innerHTML = `(${i})`;
  }
}

export default count;