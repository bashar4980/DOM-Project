




const selectBtn = document.querySelectorAll('.selected');

for(let select of selectBtn ){
    select.addEventListener('click' , ()=>{

    const selectedPlayer = document.getElementById('selectedPlayer');
  
    const playerName = select.parentNode.children[0].innerText ;
    const li = document.createElement('li');
    li.setAttribute( "class", "player" );
    li.innerText = playerName ;
    const length =  selectedPlayer.children.length;
    
   
    if(length < 5){
        
        selectedPlayer.appendChild(li);
        select.setAttribute("disabled" , 'true')
        
    }
    else{
        alert("Only Five Player can Add")
    }
  
    
    })

 
}



