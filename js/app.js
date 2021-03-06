$( () => {
    
    const urlApi  = 'https://api.chucknorris.io/jokes/random';

    var rateValue = $('#jokeRate');
    var form = $('#myForm');
    var checkedRate = form.find('input[name=rating]:checked', '#myForm').val();
    var jokeRates = [];
    var jokeAvg = 0;
    var jokeAvgFixed = 0;

    function getJoke() {
        $.ajax ({
            url : urlApi,
            dataType : 'json'
        }).done((e) => {
            $('img').attr('src',e.icon_url);
            $('.jokeContent').text(e.value);
        });
    };

    getJoke();

    $('#myForm').submit(function(e) {
        e.preventDefault();

        if($('input[name=rating]:checked', '#myForm').val() == undefined) {
            alert("You must rate the current joke to get new one");
        } else {
            jokeRates.push($('input[name=rating]:checked', '#myForm').val());

            jokeAvg = jokeRates.reduce(function(a, b) {
                return (parseInt(a) + parseInt(b))
            }) / jokeRates.length;

            jokeAvgFixed = jokeAvg.toFixed(2);

            rateValue.text(jokeAvgFixed);

            $('input[name=rating]:checked').each(function(){
                $(this).prop('checked', false);
            });

            getJoke();
        }


    });

    window.onresize = function(event) {
        if($(window).width() < 600) {
            $(".joke").css("width", $(window).width());
            $(".jokeRating").css("width", $(window).width());
        } else {
            $(".joke").css("width", 600);
            $(".jokeRating").css("width", 600);
        } 
    };
    
});



    


