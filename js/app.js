// Funzione
function generaEmail() {
    let email = "";
    fetch( "https://flynn.boolean.careers/exercises/api/random/mail" )
        .then( response => response.json() )
        .then( data => {
            email = data.response;
            return email;
        });
    
};

// Script
const lista = document.getElementById("lista") 

for ( let i = 0; i < 10; i++ ) {
    lista.innerHTML = lista.innerHTML + `
    <li><div><span>${generaEmail()}</span></div></li>
    `
};