$( function() {
	var wd = $(window).width();
	if(wd < 550) {
		wd = wd * 90 / 100;
	}
	else if (wd < 700) {
		wd = wd * 70 / 100;
	}
	else if (wd < 850) {
		wd = wd * 60 / 100;
	}
	else if (wd < 1000) {
		wd = wd * 50 / 100;
	}
	else
	{
		wd = wd*30/100;
	}
    $( "#destaque" ).dialog({
		autoOpen: true,
		width: wd,      
		show: {
        effect: "explode",
        duration: 2000
      },
      hide: {
        effect: "drop",
        duration: 1000
      }
	});
  } );
  
  
 setTimeout(function(){ modalClose(); }, 10000);
 
 function modalClose() {
	$("#destaque").dialog("close");
 }