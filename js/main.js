$(document).ready(function() {
    $('#riptide .image-container').on('mouseenter mouseleave', function() {
        console.log("hello")
        $('#riptide .project-description').toggleClass('pt-7')
    });

    $('.hover-button').click(function(){
        $('.image-container').toggleClass('hover-off');
        $('.help').toggleClass('hide')
        if($(this).hasClass('turned-off')) {
            $(this).text('Hover Off').toggleClass('turned-off');
        } else {
            $(this).text('Hover On').toggleClass('turned-off');
        }
    })

     $('.hover-button').on('mouseenter mouseleave', function(){
         $('.help').toggleClass('show');
     })
});

