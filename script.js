$(document).ready(function(){
    // I'm hungry
    $('.j11').click(function(){
       $('html,body').animate({scrollTop:$('.g11').offset().top},3500);
    });

    // Show me more
    $('.j22').click(function(){
       $('html,body').animate({scrollTop:$('.g22').offset().top},1500);
    });

    // Food delivery
    $('.food_delivery').click(function(){
       $('html,body').animate({scrollTop:$('.food_delivery_1').offset().top},1500);
    });

    // How it works
    $('.how_it_works').click(function(){
       $('html,body').animate({scrollTop:$('.how_it_works_1').offset().top},2000);
    });
     
    // Our cities
    $('.our_cities').click(function(){
        $('html,body').animate({scrollTop:$('.our_cities_1').offset().top},2500);
    });

    // sign up
    $('.sign_up').click(function(){
        $('html,body').animate({scrollTop:$('.sign_up_1').offset().top},3000)
    })

});

