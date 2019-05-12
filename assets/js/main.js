(function($){
	"use strict"; 

    //Preloader
    $('body').jpreLoader({
        preMainSection: '#main-preloader',
        prePerText: '.preloader-percentage-text',
        preBar: '.preloader-bar',
    });

    // portfolio gallery
    $(window).on( "load", function() {
        if ($('.portfolio-gallery').length) {
             var $container = $('.portfolio-gallery');
             $container.isotope();

            $('.portfolio-filter').on("click", function(){
                $(".portfolio-filter").removeClass("active");
                $(this).addClass("active");              
                var selector = $(this).attr('data-filter');
                $(".portfolio-gallery").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
            });
                return false;
            });      
        }

    });

    // Textillate
    $('.tlt').textillate();

    // parallax
    $('.parallax-banner,.cta').parallax();

    /* accordion */
    $('.accordion .card:first-child .card-header h5').attr('aria-expanded', 'true');
    $('.accordion .card:first-child .collapse ').addClass('show');
    $('.accordion .card:first-child h5 span.fa ').removeClass('fa-chevron-right').addClass('fa-chevron-down');
    $('.accordion .card h5').on('click',function(){
        $(this).children('span.fa').toggleClass('fa-chevron-down fa-chevron-right');
        $('.accordion h5 span.fa').not($(this).children('span.fa')).removeClass('fa-chevron-down').addClass('fa-chevron-right');
    });


	//magnificPopup Light Box	
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true
	});

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
    });

	// Stretch column
	ConsultYou_stretch_column();

    function ConsultYou_stretch_column() {
        $('.wpb_column[data-stretch]').each(function () {
            var stretch = $(this).data('stretch');
            var xPos = $(this).offset().left;
            var wW = $(window).width();
            var xW = $(this).width();

            var value = wW - (xW + xPos);
            if (stretch == 'left') {
                value = xPos;
            }

            $(this).find('.vc_column-inner').css('width', xW + value + 'px');
            $(this).find('.vc_column-inner').css('margin-' + stretch, '-' + value + 'px');
        });
    };

    //CountTo
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    // Testimonials
    $('.testimonials').slick({
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        arrows: false,
        slidesToShow: 1
    });
    
    //Back to top
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            $('#backtotop').fadeIn(500);
        } else {
            $('#backtotop').fadeOut(500);
        }
    });

    $('#backtotop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    // countdown
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime(
                '<div class="col"><div class="cdown"><span class="days"><strong>%-D</strong><p>Days.</p></span></div></div><div class="col"><div class="cdown"><span class="hour"><strong> %-H</strong><p>Hours.</p></span></div></div><div class="col"><div class="cdown"><span class="minutes"><strong>%M</strong> <p>Minutes.</p></span></div></div><div class="col"><div class="cdown"><span class="second"><strong> %S</strong><p>Second.</p></span></div></div>'
            ));
        });
    });
    
})(jQuery);