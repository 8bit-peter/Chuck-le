$( () => {
    
    const urlApi  = 'https://api.chucknorris.io/jokes/random';

    var rateValue = $('#jokeRate');
    var form = $('#myForm');
    var checkedRate = form.find('input[name=rating]:checked', '#myForm').val();
    var jokeRates = [];
    var jokeAvg = 0;

    // test
    var jokeSum = 0;

    $.ajax ({
        url : urlApi,
        dataType : 'json'
    }).done((e) => {
        $('img').attr('src',e.icon_url);
        $('.jokeContent').text(e.value);
    });

    $('#myForm').submit(function(e) {
        e.preventDefault();
        jokeRates.push($('input[name=rating]:checked', '#myForm').val());
        jokeAvg = jokeRates.reduce(function(a, b) {
            return (parseInt(a) + parseInt(b)) / jokeRates.length;
            
        });
        console.log("---NEXT SUBMIT---")
        console.log("Joke Avg "+jokeAvg);
        console.log("Joke Rates "+jokeRates)
        console.log("Joke length "+jokeRates.length);
        jokeSum = jokeRates.reduce(function(a, b) {
            return parseInt(a) + parseInt(b)
        });
        console.log("Joke SUm "+jokeSum)
    });
    
});