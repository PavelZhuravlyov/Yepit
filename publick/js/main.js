$(document).ready(function(){
	(function(){
		$(document).on('click', '.menu-icn', function(){
			if(!$('menu').hasClass('m-active')){
				$('menu').addClass('m-active');
				$('.main-content').animate({
					'marginLeft' : $('menu').width()
				}, 300);
				$('.news-w li').each(function(){
					$(this).addClass('n-li-m-a');
				});
			}
			else{
				$('menu').removeClass('m-active');
				$('.main-content').animate({
					'marginLeft' : 0
				}, 100);
				$('.news-w li').each(function(){
					$(this).removeClass('n-li-m-a');
				});
			}
			return false;
		});
	})();

	(function(){
		var pathname = window.location.pathname;
		$('.menu-list a').each(function(){
			if($(this).attr('href') === pathname){
		   		$(this).addClass('m-list-a');
		   		return false;
		   	}
		});
	})();
});