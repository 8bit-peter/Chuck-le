$( () => {
    
    const urlApi  = 'https://api.chucknorris.io/jokes/random';

    $.ajax ({
        url : urlApi,
        dataType : 'json'
    }).done((e) => {
        $('img').attr('src',e.icon_url);
        $('.jokeContent').text(e.value);
    });

    var rateValue = $('#jokeRate');
    var form = $('#myForm');
    var checkedRate = form.find('input[name=rating]:checked', '#myForm').val();

    $('#myForm').submit(function(e) {
        e.preventDefault();
        console.log($('input[name=rating]:checked', '#myForm').val());
    })

    // $('#myForm input').on('change', function() {
    //     alert($('input[name=rating]:checked', '#myForm').val()); 
    //  });

    //  $('#myForm input').on('change', function() {
    //     alert($('input[name=rating]:checked', '#myForm').val()); 
    //  });
    
})