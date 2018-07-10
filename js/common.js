$(function() {

	$('.info-first').click(function(){
   if ($(window).width() <= 992) {
      $('.s-features__item-info + .first').toggleClass('open');
   }
	});

	$('.info-second').click(function(){
	   if ($(window).width() <= 992) {
	      $('.s-features__item-info + .second').toggleClass('open');
	   }
	});


	$('.has-dropdown-menu__link').click(function(){

		$('.dropdown-menu').toggleClass('dropdown-menu--open');

	});

	// MODAL

	$('.callback-modal').magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	// SLICK SLIDER

	$('.s-plan-slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
	});

	$('.s-main-slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
		speed: 500,
  	fade: true,
  	cssEase: 'linear'
	});

	$('.s-social__slider').slick({
	  centerMode: true,
	  centerPadding: '200px',
	  slidesToShow: 3,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        centerPadding: '100px',
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.s-slider__prev--first').click(function(){
	  $('.s-social__slider--first').slick('slickPrev');
	})
	$('.s-slider__next--first').click(function(){
	  $('.s-social__slider--first').slick('slickNext');
	})

	$('.s-slider__prev--second').click(function(){
	  $('.s-social__slider--second').slick('slickPrev');
	})
	$('.s-slider__next--second').click(function(){
	  $('.s-social__slider--second').slick('slickNext');
	})

	$('.s-social__slider').magnificPopup({ delegate: 'a', type: 'image' });
	$('.s-gallery__wrap--inner').magnificPopup({ delegate: 'a', type: 'image' });

	// ACCORDION JQUERY

	$('.s-document > li:eq(0) a').addClass('active').next().slideDown();

    $('.s-document > li > a').click(function(j) {
        var dropDown = $(this).closest('li').find('.drop');

        $(this).closest('.s-document').find('.drop').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.s-document').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

});

AOS.init({
  offset: -400,
  duration: 800,
  easing: 'ease-out-back',
  delay: 100,
  once: true,
});
