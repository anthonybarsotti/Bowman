(function(){
	$(document).ready(function() {
		$(".wg-boxslider").jCarouselLite({   
			btnNext: ".next",
			btnPrev: ".prev",   
			visible: 3,
			auto: 5000,     
			speed:1000
		});
		$('.testimonials .slideshow')
		.after('<div class="nav_wrapper"><div id="pager1"></div></div>') 
		.cycle({
			fx: 'scrollHorz', 
			timeout:0, 
			speed:500,
			cleartypeNoBg: true,					
			pager:  '#pager1' 
		});
		$('#pager1 a').html('&nbsp;');
		$('.news .slideshow')
		.after('<div class="nav_wrapper"><div id="pager2"></div></div>') 
		.cycle({
			fx: 'scrollHorz', 
			timeout:0, 
			speed:500,
			cleartypeNoBg: true,					
			pager:  '#pager2' 
		});
		$('#pager2 a').html('&nbsp;');
	});
})();