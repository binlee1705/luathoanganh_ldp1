'use strict';

function owlslide(num, margin, autoplay, dot, nav, items, animateIn, animateOut) {
    var option = {
        items: num,
        autoplay: num > items[0] ? autoplay : false,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        loop: num > 1,
        nav: num > items[0] ? nav : false,
        dots: num > items[0] ? dot : false,
        autoplayHoverPause: true,
        margin: margin[0],
        lazyLoad: true,
        navText: [''],
        animateIn: animateIn,
        animateOut: animateOut,
        responsive: {
            0: {
                items: items[4],
                margin: margin[4],
                autoplay: num > items[4] ? autoplay : false,
                nav: num > items[4] ? nav : false,
                dots: num > items[4] ? dot : false
            },
            479: {
                items: items[3],
                margin: margin[3],
                autoplay: num > items[3] ? autoplay : false,
                nav: num > items[3] ? nav : false,
                dots: num > items[3] ? dot : false
            },
            767: {
                items: items[2],
                margin: margin[2],
                autoplay: num > items[2] ? autoplay : false,
                nav: num > items[2] ? nav : false,
                dots: num > items[2] ? dot : false
            },
            991: {
                items: items[1],
                margin: margin[1],
                autoplay: num > items[1] ? autoplay : false,
                nav: num > items[1] ? nav : false,
                dots: num > items[1] ? dot : false
            },
            1199: {
                items: items[0],
                margin: margin[0],
                autoplay: num > items[0] ? autoplay : false,
                nav: num > items[0] ? nav : false,
                dots: num > items[0] ? dot : false
            }
        }
    };
    return option;
}
function scrollHead(event) {
    event.preventDefault();
    $('body,html').animate({ scrollTop: 0 }, 1600);
}
$(document).ready(function () {
    $(window).scroll(function () {
        $('#bttop').click(function () {
            scrollHead();
        });
    });
    $('html').on('click', ".tabs .tab-links a", function (e) {
        var currentAttrValue = $(this).attr('href');
        $('.tabs ' + currentAttrValue).addClass("active").siblings().removeClass("active");
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});
