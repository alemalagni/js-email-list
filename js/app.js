// Funzione
function generaEmail() {
    fetch( "https://flynn.boolean.careers/exercises/api/random/mail" )
        .then( response => response.json() )
        .then( data => {
            return data.response;
        });
};

// Script
const lista = document.getElementById("lista") 

for ( let i = 0; i < 10; i++ ) {
    lista.innerHTML = `
    <li><div><span>${generaEmail()}</span></div></li>
    `
};