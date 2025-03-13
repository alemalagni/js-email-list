// Script
const lista = document.getElementById("lista")

for ( let i = 0; i < 10; i++ ) {
    fetch( "https://flynn.boolean.careers/exercises/api/random/mail" )
        .then( response => response.json() )
        .then( data => {
            lista.innerHTML = lista.innerHTML + `
            <li><div><span>${data.response}</span></div></li>
            `
        });
};