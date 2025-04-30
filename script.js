// comando per un popup
//alert("Codice esterno");

// comando per stampa su terminale
console.log("Ciao");

let a = 1;
console.log(a);

// if
if( a > 0 )
    console.log("a positivo");

// while
while(a < 0){
    console.log("a negativo");
    a++;
}
//for
for (i = 0; i < 4; i++){
    console.log(i);
}

// creazione lista
let lista = [1,2,3];
// inserimento in lista
lista.push(4);
console.log(lista);

function somma(n1, n2){
    return n1+n2;
}

let s = somma(1,2);
console.log(s);


let divNome = document.getElementById("nome");
divNome.innerHTML = "Andrea";
