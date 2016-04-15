$(document).ready(function() {
	
	/* mixItUp - в разработке */	
	/*$('#portfolio').mixItUp({
			callbacks: {
					onMixEnd: function(state){
							console.log(state)
					}   
			}
	});*/
	
	$('.filter__item').click(function() {
		$('.filter__item').removeClass('filter__item--active');
		$(this).addClass('filter__item--active');
	});

	/* Initialize Swiper */
	var swiper_home = new Swiper('#home__swiper-container', {
		pagination: '.swiper-pagination',
		direction: 'vertical',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 0,
		mousewheelControl: false,
		effect: 'fade',
		autoplay: 5000
	});
	var swiper_features = new Swiper('#features__swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true			
	});
	var swiper_team = new Swiper('#team__swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true			
	});		
	
});