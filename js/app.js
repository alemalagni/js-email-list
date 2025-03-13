// Funzione
function generaEmail(lista) {
    fetch( "https://flynn.boolean.careers/exercises/api/random/mail" )
        .then( response => response.json() )
        .then( data => {
            lista = lista + `
            <li><div><span>${data.response}</span></div></li>
            `
            return lista;
        });
    
};

// Script
const lista = document.getElementById("lista") 
let stringa = "";
for ( let i = 0; i < 10; i++ ) {
    stringa = lista.innerHTML;
   generaEmail(stringa);
};