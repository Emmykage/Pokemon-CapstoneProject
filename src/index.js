import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import pokemonCard from './modules/pokemonCard.js';
import { popUp, pokedex} from './modules/displayPopUp';
/* eslint-disable no-await-in-loop */



async function getPokemon() {
  for (let i = 1; i < pokedex; i += 1) {
    const id = [i];
   await pokemonCard(id);   
  }
  popUp()
}

getPokemon();