// Script
const lista = document.getElementById("lista")
const button = document.getElementById("button")

button.addEventListener( "click",
    function() {
        lista.innerHTML = "";
        for ( let i = 0; i < 10; i++ ) {
            fetch( "https://flynn.boolean.careers/exercises/api/random/mail" )
                .then( response => response.json() )
                .then( data => {
                    lista.innerHTML = lista.innerHTML + `
                    <li><div><span>${i}: ${data.response}</span></div></li>
                    `
                });
        };
    }
);