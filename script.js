// Add Selection Player
const selects = document.querySelectorAll('.selected');
const selectedPlayer = document.getElementById('selectedPlayer');

for(let select of selects ){
    select.addEventListener('click' , ()=>{
   console.log(select)
   
    const playerName = select.parentNode.children[0].innerText ;
    const li = document.createElement('li');
    li.innerText = playerName ;
    const length =  selectedPlayer.children.length ;
   
    if(length < 5){
        
        selectedPlayer.appendChild(li);
        select.setAttribute("disabled" , 'true')
    }
    else{
        alert("Only Five Player can Add")
    }
   
    
    })
}
