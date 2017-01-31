//Wait until all page is dowloaded (img also)
//-------------------------------------------
    $(window).on("load",function(){ 
        
        //Init wow lib  for features animation
            new WOW().init();
        
        
        //Change iphone picture every 3 secondes.
            let images = [];
                images[0] = "img/image1.png";
                images[1] = "img/image2.png";
                images[2] = "img/image3.png";
                images[3] = "img/image4.png";
                images[4] = "img/image5.png";
                images[5] = "img/image6.png";

            let i = 1;
            setInterval(NextIphoneImg, 3000);

            function NextIphoneImg() {
                $('.iphone2-img').fadeOut(250, function(){
                    
                    $(this).attr('src', images[i]).fadeIn(250);
                    console.log("i=", i);
                })
                i++;
               i = (i < images.length) ? i : 0;
            }
    });


//Smooth scrolling
//----------------
    $( document ).ready(function() {
            $('.js-link').on('click', function() { 
                var page = $(this).attr('href'); 
                var speed = 750; 
                $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
                return false;
            });

    });



//Popup
//-----
 