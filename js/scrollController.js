 $(window).scroll(function() {
        if($(this).scrollTop() > 500 && $(window).width() <= 600) {
           $("#scrollTop").show();
        }
        else
        {
           $("#scrollTop").hide();
        }
    });
