function popUp(){
    const commentBtn = document.querySelectorAll('.commBtn');
    commentBtn.forEach(btn =>{       
        btn.addEventListener('click', (e)=>{
            for(let i = 0; i < pokedex; i++){
                let id = [i]
                if(e.target.id === `comm-${id}`){
                    console.log(e.target.class)
                    console.log("hey")
                }
            }
            
        })
    })
}
export default popUp