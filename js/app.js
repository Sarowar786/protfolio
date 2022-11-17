$(document).ready(function(){
    $(window).on('scroll' , function(){
        var scroll= $(this).scrollTop();
        if(scroll >400){
            $('.back_to_top').fadeIn(500)
        }
        else{
            $('.back_to_top').fadeOut(700) 
        }


        if(scroll > 500) {
            $('.nav_part').addClass('nav_bg'); 
        }
        else{
            $('.nav_part').removeClass('nav_bg');
        }
    });

    
    $('.back_to_top').click(function(){
       $('html,body').animate({scrollTop:0}, 1000);
    });
});



new WOW().init();

new VenoBox({
    selector: '.my-video-links',
});