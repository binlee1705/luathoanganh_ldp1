'use strict';

const wow = new WOW(
    {
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 100, // default 
        live: true // default
    }
); wow.init();


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
    setInterval(() => {
        $("#header .afterTitle").find(".item").each(function (i) {
            if ($(this).hasClass("in")) {
                $(this).attr("class", "item out")
            } else {
                $(this).attr("class", "item in")
            }
        });
    }, 2000);
    $(".tvmp").each(function () {
        animationChar($(this))
    })
});

function animationChar(ele, animationIn = "in", animationOut = "out", split = 1) {
    if (split === 1) {
        var text = ele.text().trim();
        const arrayChar = text.split('');
        if (arrayChar.length > 0) {
            var innerHtml = "";
            for (var i = 0; i < arrayChar.length; i++) {
                if (arrayChar[i] === ' ') {
                    innerHtml += `<span class="item"> &nbsp;</span>`
                } else {
                    innerHtml += `<span class="item">${arrayChar[i]}</span>`
                }
            }
            ele.html(innerHtml)
        }
    }
    setInterval(() => {
        ele.find(".item").each(function (i) {
            setTimeout(() => {
                $(this).attr("class", `item ${animationOut}`)
                setTimeout(() => {
                    $(this).attr("class", `item ${animationIn}`)
                }, i);
            }, (i + 1) * 60);
        });
    }, 4000);
}

const countDown = (time, func) => {
    var countDownDate_Input = new Date(time).getTime();
    var x_Input = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate_Input - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $("#countDown .Day").text(days);
        $("#countDown .Hour").text(hours);
        $("#countDown .Minute").text(minutes);
        $("#countDown .Second").text(seconds);
        if (distance < 0) {
            clearInterval(x_Input);
            func();
        }
    },
        1000);
}