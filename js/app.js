fetch( "https://flynn.boolean.careers/exercises/api/random/mail" )
    .then( response => response.json() )
    .then( data => {
        for ( let i = 0; i < 10; i++ ) {
            console.log(data.response);
        }
    });
    