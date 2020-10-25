// JavaScript Document

$(document).ready(function() {
		var altura= $('nav').offset().top;
		$(window).on('scroll', function() { if ($(window).scrollTop() > 50) {
			$('nav').addClass('shrink');
		}
		
			
		})	  
				  })

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
posicionarMenu();
 
$(window).scroll(function() {    
    posicionarMenu();
});
 
function posicionarMenu() {
    var altura_del_header = $('.cabecera').outerHeight(true);
    var altura_del_menu = $('.menus').outerHeight(true);
 
    if ($(window).scrollTop() >= altura_del_header){
        $('.menus').addClass('fixed');
        $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
    } else {
        $('.menus').removeClass('fixed');
        $('.wrapper').css('margin-top', '0');
    }
}
 
</script>

	
	

$(document).ready(function(){
	var altura = $('.cabecera').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.cabecera').addClass('menu-fixed');
		} else {
			$('.cabecera').removeClass('menu-fixed');
		}
	});

});

