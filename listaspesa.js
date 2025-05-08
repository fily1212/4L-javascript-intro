/* Dato un array di lista della spesa, mostrare in card  */
/*<div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div> */

function creaCard(titolo, bottone){
    const divCol = document.createElement("div");
    divCol.className = "col-sm-6 mb-3 mb-sm-0";
    //divCol.classList.add("col-sm-6");
    const divCard = document.createElement("div");
    divCard.className = "card";
    
    const divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    
    const h5 = document.createElement("h5");
    h5.className="card-title";
    h5.innerHTML = titolo;

    const button = document.createElement("a");
    button.className = "btn btn-primary";
    button.innerHTML = bottone;
    divCardBody.appendChild(h5);
    divCardBody.appendChild(button);
    divCard.appendChild(divCardBody);
    divCol.appendChild(divCard);
    document.getElementById("riga").appendChild(divCol);
}

let array = ["Carne", "Dentifricio", "Spazzolino"];

for(let i = 0; i < array.length; i++){
    creaCard(array[i],"Rimuovi");
}
/*
array.forEach(function(elemento){
    creaCard(elemento,"Rimuovi");
});

const c = function(elemento){
    creaCard(elemento,"Rimuovi");
}

function c(elemento){
    creaCard(elemento,"Rimuovi");
}*/

array.forEach(
    e=>{creaCard(elemento,"Rimuovi");
});


creaCard("Uova", "Rimuovi");

creaCard("Farina", "Rimuovi");
creaCard("Latte", "Rimuovi");
creaCard("Zucchero", "Rimuovi");