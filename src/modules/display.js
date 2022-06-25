const row = document.querySelector('.row');

async function display(pokemon, like) {
  if (like === undefined) {
    like = {
      likes: 0,
    };
  }

  const divCol = document.createElement('div');
  divCol.classList.add('col');
  divCol.innerHTML = `
    <img src=${pokemon.sprites.front_default}>

   <div class="top"><h3>${pokemon.name}</h3><span id=${pokemon.id} class="heart"> <i  class="like fa-solid fa-heart"></i><span class="likecount ${pokemon.id}" id="span-${pokemon.id}">${like.likes}</span </span> </div>
   <button id=comm${pokemon.id} class="comments-btn" type="button">Comment</button>   
    

    
    `;
  row.appendChild(divCol);
}
export default display;
