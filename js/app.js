$( () => {
    
    const urlApi  = 'https://api.chucknorris.io/jokes/random';

    $.ajax ({
        url : urlApi,
        dataType : 'json'
    }).done((e) => {
        $('img').attr('src',e.icon_url);
        $('.jokeContent').text(e.value);
    });

    
})