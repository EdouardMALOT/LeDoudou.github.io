//Wait until all page is dowloaded (img also)
//-------------------------------------------
    $(window).on("load",function(){ 
        
        //Init wow lib  for features animation
            new WOW().init();
        
        
        //Change iphone picture every 3 secondes. (And the text in reponsive)
            let images = [];
                images[0] = "img/image1.png";
                images[1] = "img/image2.png";
                images[2] = "img/image3.png";
                images[3] = "img/image4.png";
                images[4] = "img/image5.png";
                images[5] = "img/image6.png";
        
            let text = [];
                text[0] = "Discover the best and busiest venues <br>in your area";
                text[1] = "Check-in to a venue on the app before you go out. Your profile now become visible to other users also going";
                text[2] = "Check out the other people also going later on";
                text[3] = "Hide anyone you aren't keen on, now they can no longer see your profile. See someone interesting? Send them a like!";
                text[4] = "Head out to a venue and connect with the other Soda users you saw on the app earlier. <br>Go alone or with friends, who cares!?<br>Just get social and be rewarded for it";
                text[5] = ">Delete all generic dating apps on your phone because you are now a certified social animal!";
        
            let i = 1;
            setInterval(NextIphoneImgAndText, 4000);
        
            function NextIphoneImgAndText() {
                //Update IMG
                    $('.iphone2-img').fadeOut(250, function(){
                        $(this).attr('src', images[i]).fadeIn(250);
                    })
                
                //Update text
                    $('.section5-responsive-div').fadeOut(250, function(){
                        $('.section5-responsive-text').html(text[i]);
                        $(this).fadeIn(250);
                    })
                 
                
                
                i++;
                i = (i < images.length) ? i : 0;
            }
        
        
        
    });


//Wait until document is ready
//----------------------------
    $( document ).ready(function() {
        
        //Smooth scrolling      
            $('.js-link').on('click', function() { 
                var page = $(this).attr('href'); 
                var speed = 750; 
                $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
                return false;
            });
        
        
        //FancyBox
            $(".fancybox").fancybox();

        	$(".various").fancybox({
                maxWidth	: 800,
                maxHeight	: 600,
                fitToView	: false,
                width		: '70%',
                height		: '70%',
                autoSize	: false,
                closeClick	: false,
                openEffect	: 'elastic',
                closeEffect	: 'elastic'
            });
        
    });



//Popup
//-----
 