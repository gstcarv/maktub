$(window).resize(function(){
 if($(window).width() > 600) {
   $("#menuOpen").hide();
   $("#menuClose").hide();

   $("nav ul li").show();
  }
  else
  {
  	$("#menuOpen").show();
    $("#menuClose").hide();

    $("nav ul li").hide();
  }
});

 function openMenu() {
   $("#menuOpen").hide();
   $("#menuClose").show();

   $("nav ul li").show(300);
}

function closeMenu() {
   $("#menuOpen").show();
   $("#menuClose").hide();

   $("nav ul li").hide(300);
}