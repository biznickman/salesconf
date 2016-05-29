$(document).ready(function() {

    // Sticky Nav
	
    //if($(window).width() > 1024 ){
	
        $(window).scroll(function() {
		 
            var header = $(document).scrollTop();
		 
            if (header > 568 ) {
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky');
            }
        });
	
    //}

});