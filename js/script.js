let menuoff = $('#menu').offset().top

$(window).scroll(function () {
    let scrolling = $(this).scrollTop();

    if (scrolling > menuoff) {
        $('#menu').addClass('fix_menu');
    } else {
        $('#menu').removeClass('fix_menu');
    }
});


// menu fix end


$('#bc_top').click(function () {
    $('html, body').animate({
        scrollTop: 0,
    }, 2000);
});


$(window).scroll(function () {
    let scrolling = $(this).scrollTop();

    if (scrolling > 200) {
        $('#bc_top').fadeIn();
    } else {
        $('#bc_top').fadeOut();
    }
});

// back to top button end



$('.slider_img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: false,
    nextArrow: false,
    dots: true,
});

// slider part end






var containerEl = document.querySelector('.gallery');

var mixer = mixitup(containerEl);

// work filter part end






$('.banner_img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: false,
    nextArrow: false,
    dots: true,
});

// banner slider end




// As A Vanilla JavaScript Plugin

var $gallery = new SimpleLightbox('.gallery a', {
    closeText: 'X',
    swipeClose: true,
    showCounter: true,
    animationSlide: true,
});

// light box end



new VenoBox({
    selector: '.player',
});

// video set up end