import pokemonCard from "./pokemonCard";

const pokedex = 157;
const popUp = () => {
    const commentBtn = document.querySelectorAll('.commBtn');
    commentBtn.forEach((btn) =>{       
        btn.addEventListener('click', (e)=>{
            for(let i = 1; i < pokedex; i++){
                let id = [i]
                if(e.target.id === `comm-${id}`){
                    console.log('clicke ' + id)
                  console.log(pokemonCard(id))
                }
            }
            
        })
    })
}

function generatePopUp(){
    const popupDisplay = document.querySelector(".popup");
    const popContain = document.querySelector(".pop-contain");
    const popDetails = document.createElement('div');
    popDetails.innerHTML = `
    <img src="">
<div class="pokemon-details">
  <p class="name"></p>
  <p class="description"></p>
  <p class="weight"></p>
  <p class="height"></p>

    `
}
export { popUp, pokedex }