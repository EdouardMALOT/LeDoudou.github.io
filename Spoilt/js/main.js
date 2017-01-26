//Wait until all page is dowloaded (img also)
$(window).on("load",function(){ 
    
    
    //nav-menu
         $('.nav-menu-item').click(function(){
             $('.nav-menu-item').removeClass('menu-selected');
             $(this).addClass('menu-selected');
             return false;
         });

    //Men / Woman selection
         $('.genre-item').click(function(){
             $('.genre-item').removeClass('genre-selected');
             $(this).addClass('genre-selected');
             return false;
         });
    
    //Wishlist event
        $('.product-item-wishlisticon-img').click(function() {
            $(this).toggleClass('wishlist-active');
            return false;
        });
    
    //Left Menu
        $('.menu-categories').click(function(){
             $(this).next('.sub-categorie').slideToggle("slow");
             $(this).toggleClass('cat-selected');
             $(this).next('img').rotate(45);
        });
    
        //Disable link effect
        $('.sub-categorie a').click(function(){
            return false;
        })
        
        //Disable link effect
        $('.btn-add-card a').click(function(){
            return false;
        })      

});
