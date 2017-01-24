//Smooth scrolling
//----------------
    $( document ).ready(function() {
            $('.js-link').on('click', function() { // Au clic sur un élément
                var page = $(this).attr('href'); // Page cible
                var speed = 750; // Durée de l'animation (en ms)
                $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
                return false;
            });

    });


//Wait until all page is dowloaded (img also)
//-------------------------------------------
    $(window).on("load",function(){ 

        //Init wow lib  for features animation
            new WOW().init();

        //Hero1 section animation     
            $('.js-wp-iphone').addClass('animated slideInUp')

            //Callback when iphone slideInUp is finished
            $(".js-wp-iphone").bind('oanimationend animationend webkitAnimationEnd', function() { 
                $(".iphone-btn").delay(200).animate( {top: "+=3"}, 250, function() {
                    // Animation complete.
                    $('.iphone-screen').delay(100).addClass('screen-on');            
                });

                $(".iphone-btn").delay(300).animate( {top: "+=-3"}, 250);
            });  
    });




