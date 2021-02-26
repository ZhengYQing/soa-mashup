$(document).ready(function(){
    var w_height = $(window).height()
    var $wrapper = $('#wrapper')

    if(w_height > $wrapper.height()) {
    //        $wrapper.css('margin-top',(w_height - $wrapper.height())/2)
    }

    $('#timer').countdown({
        until: new Date(2013, 12-1, 25),
        format: 'dHMs'
    });




    $("#newsletter-form").validate()
    $("#contact-form").validate()
})