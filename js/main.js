$(document).ready(function() {
    $('#riptide .image-container').on('mouseenter mouseleave', function() {
        console.log("hello")
        $('#riptide .project-description').toggleClass('pt-7')
    });

    $('.hover-button').click(function(){
        $('.image-container').toggleClass('hover-off');
        $('.help').toggleClass('hide')
        if($(this).hasClass('turned-off')) {
            $(this).toggleClass('turned-off');
        } else {
            $(this).toggleClass('turned-off');
        }
    })

     $('.hover-button').on('mouseenter mouseleave', function(){
         $('.help').toggleClass('show');
     })

    // All init files
     new WOW().init();
     var rellax = new Rellax('.rellax', {

    });
});

