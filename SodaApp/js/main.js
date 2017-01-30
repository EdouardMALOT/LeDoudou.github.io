//Wait until all page is dowloaded (img also)
//-------------------------------------------
    $(window).on("load",function(){ 
        
         //Init wow lib  for features animation
        new WOW().init();
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
    function popup(mylink, windowname) {     
        if (! window.focus)     return true; 
        var href; 

        if (typeof(mylink) == 'string') 
            href=mylink; 
        else 
            href=mylink.href; 

        window.open(href, windowname, 'width=400,height=200,scrollbars=yes'); 
        return false; 
    }
