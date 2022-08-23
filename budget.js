document.getElementById("calculate").addEventListener("click" ,function(){
    const length =  selectedPlayer.children.length;
    const perplayercost = getInputvalueById("perplayercost");
    const playerExenses = document.getElementById("playerExenses");
    if(isNaN(perplayercost) === true){
       alert("Please Enter Only Number Value");
    }
   else if(length > 0  ){
    playerExenses.innerText = perplayercost * length ;
  }
  else{
    alert("Please Add Player")
  }
})

document.getElementById("totalCalculate").addEventListener("click" ,function(){
 
    const ManagerCost = getInputvalueById("manager");
    const coachCost = getInputvalueById("coach");
    const playerCost = getInputvalueById("playerExenses")

 
    if(isNaN(ManagerCost)===true){
      alert("Plese Enter Number Value")
    }
    else if(isNaN(coachCost)=== true){
        alert("Plese Enter Number Value")
    }
    else{
        
        const toatalCost = ManagerCost + coachCost + playerCost ;
        const total = document.getElementById("total");
        total.innerText = toatalCost ;
    }
})


