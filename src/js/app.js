import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();

"use strict";

(function($) {
    $('.filter-open').click((e) => {
		e.preventDefault();

		$('.catalog').toggleClass('open-filter');

		$('.filter-close').click((e) => {
			e.preventDefault();

			$('.catalog').removeClass('open-filter');
		})
	})

    ///////////////////////////
    // slider radio catalog filter
    $( "#price" ).slider({
        range: true,
        min: 0,
        max: 150000,
        values: [ 300, 150000 ],
        slide: function( event, ui ) {
            $( "#priceOne" ).val( ui.values[ 0 ] );
            $( "#priceTwo" ).val( ui.values[ 1 ] );
        }
    });
    $( "#priceOne" ).val( $( "#price" ).slider( "values", 0 ) );
    $( "#priceTwo" ).val( $( "#price" ).slider( "values", 1 ) );


    $('.navbar__catalog_link').on('click scroll', (e) => {
        e.preventDefault();
        $('#nav').toggleClass('menu-open');
    });
    ///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});
    // $('.navbar__basket_link').on('click scroll', (e) => {
    //     e.preventDefault();
    //     $('#nav').toggleClass('basket-open');
    // });
    
    // slider
    $('.js-slider').slick({
        dots: true,
        dotsClass: 'js-dots js-dots--mt50',
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.js-discount-items').slick({
        dots: true,
        dotsClass: 'js-dots',
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.js-special-offers').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'js-dots',
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
            .closest('div.tabs')
            .find('div.tabs__content')
            .removeClass('active')
            .eq($(this).index())
            .addClass('active');
    });

    $('.minus, .plus').click(function (e) {
        e.preventDefault();    
        var $input = $(this).siblings('.count');
        var val = parseInt($input.val(), 10);
        $input.val(val + ($(this).hasClass('minus') ? -1 : 1));
    });
    
})(jQuery);

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});