jQuery(document).ready(function($){

    new WOW().init();

    $('.tab-wrapper').each(function() {
        let $tabWrapper, $tabID;
		$tabWrapper = $(this);
		$tabID = $tabWrapper.find('.tab-link.current').attr('data-tab');
        $tabWrapper.find($tabID).fadeIn().siblings().hide();
        $($tabWrapper).on('click', '.tab-link', function(e){
            e.preventDefault();
			$tabID = $(this).attr('data-tab');
			$(this).addClass('current').siblings().removeClass('current');
			$tabWrapper.find($tabID).fadeIn().siblings().hide();
        });
    });

    $('html').on('click', '.main-menu-btn', function(){
        $(this).addClass('active');
        $('.main-menu').addClass('active');
    });

    $('html').on('click', '.main-menu-overlay', function(){
        $('.main-menu-btn').removeClass('active');
        $('.main-menu').removeClass('active');
    });

    // $('html').on('click', '.show-search-btn', function(e){
    //     e.preventDefault();
    //     $('.hd-search-wrapper').stop().slideToggle();
    // });
    // $('html').on('click', function(e){
    //     if($('.show-search-btn').is(e.target)) return;
    //     if($('.show-search-btn').has(e.target).length > 0) return;
    //     if($('.hd-search-wrapper').is(e.target)) return;
    //     if($('.hd-search-wrapper').has(e.target).length > 0) return;
    //     $('.hd-search-wrapper').stop().slideUp();
    // });

    if($('.feedback-slider ').length > 0){
        $('.feedback-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: '<span class="main-slide-arrow prev-arrow">Prev</span>',
            nextArrow: '<span class="main-slide-arrow next-arrow">Next</span>',
            infinite: true,
            speed: 800,
            autoplay: true,
            pauseOnHover: false,
            autoplaySpeed: 4000,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                  }
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                  }
                }
            ]
        });
    };

    if($('.top-course-slider').length > 0){
        $('.top-course-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: '<span class="main-slide-arrow prev-arrow">Prev</span>',
            nextArrow: '<span class="main-slide-arrow next-arrow">Next</span>',
            infinite: true,
            speed: 800,
            autoplay: true,
            pauseOnHover: false,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                  }
                },
            ]
        });
    };

    if ($('.scroll-top').length >= 1) {
		$(window).scroll(function() {
			$(this).scrollTop() > 100 ? $('.scroll-top').addClass('show') : $('.scroll-top').removeClass('show');
		});
		$('html').on('click', '.scroll-top', function(){
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		})
    };

    $('html').on('click', '.hd-category-btn', function(e){
        e.preventDefault();
        $('.hd-category-wrapper').toggleClass('active');
    });

    $('html').on('click', '.hd-category-overlay', function(){
        $('.hd-category-wrapper').removeClass('active');
    });

    $('html').on('click', '.open-modal-btn', function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $.magnificPopup.open({
            items: {
                src: target
            },
            // type: 'image',
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    // this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = "mfp-zoom-in";
                },
            },
            midClick: true
        });
    });

    if($('.personal-filter').length > 0){
        if($('.personal-filter').find('.personal-list > li').length > 8){
            $('.personal-list').append('<li class="show-more"><a href=""><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a></li>');
            $('.personal-list > li:gt(7)').not('.show-more').hide();
            $('html').on('click', '.show-more', function(e){
                e.preventDefault();
                $('.personal-list > li:gt(7)').not('.show-more').toggle(0);
            });
        }
    }

    if (window.matchMedia("(max-width: 768px)").matches) {};

    $('.slowmotion-scroll').on('click', 'a', function(e){
        e.preventDefault();
        $(this).closest('li').addClass('active').siblings('li').removeClass('active');
        $('html, body').animate(
            { scrollTop: $($(this).attr('href')).offset().top - $('.header').outerHeight() - 70 }, 'slow', 'linear'
        )
    });

    
    
    if (window.matchMedia("(min-width: 769px)").matches) {
        $('.course-video-intro').each(function(){
            let videoWrapper = $(this);
            if(videoWrapper.find('iframe').length > 0){
                let videoSrc = videoWrapper.find('iframe').attr('src');
                videoWrapper.find('iframe').hide();
                videoWrapper.append('<div class="course-video-overlay" title="Play video"></div>');
                $('html').on('click', '.course-video-overlay', function(){
                    $(this).hide();
                    $(this).siblings('img').hide();
                    $(this).siblings('iframe').attr('src', `${videoSrc}?autoplay=1`).show();
                })
            }
        })
    };
    if (window.matchMedia("(max-width: 991px)").matches) {
        $('.hd-category-menu').on('click', '.fa', function(){
            $(this).toggleClass('rotate-ic');
            $(this).next('.sub-menu').stop().slideToggle();
        });
    };

    if($('.header').length > 0 && $('.main').length > 0){
        let $header = $('.header');
        let $main = $('.main');
        $main.css('margin-top', $header.outerHeight());
        if($(window).scrollTop() > 0){
            $header.addClass('fixed');
        }
        else{
            $header.removeClass('fixed');
        }
        $(window).on('scroll', function(){
            if($(this).scrollTop() > 0){
                $header.addClass('fixed');
            }
            else{
                $header.removeClass('fixed');
            }
        });
        if($('.breadcrumb').length > 0 && window.matchMedia("(min-width: 769px)").matches){
            if($('body').hasClass('logged-in')){
                $('.breadcrumb').css('top', $('.header').outerHeight() + 32); 
            }
            else{
                $('.breadcrumb').css('top', $('.header').outerHeight());
            }
            $('.breadcrumb').next().css('margin-top', $('.breadcrumb').outerHeight());
        };
    };
});