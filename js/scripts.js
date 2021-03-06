
const log = (x) => {
    console.log(x)
}

$("#closeButton").click(function () {
    $("#discountdiv").slideUp("slow", function () {

    });
});

$('#rightBtn').click(function () {

    let $window = $(window);
    function checkWidth() {
        let windowsize = $window.width();
        return windowsize;
    }

    let scrollPoss = 880;
    if (checkWidth() <= 768) {
        scrollPoss = 510;
    }

    if (checkWidth() <= 425) {
        scrollPoss = 350;
    }

    let rightPos = $('.trending-section').scrollLeft();

    $(".trending-section").animate({ scrollLeft: rightPos + scrollPoss }, 800);

})


$('#leftBtn').click(function () {

    let $window = $(window);

    function checkWidth() {
        let windowsize = $window.width();
        return windowsize;
    }

    let scrollPoss = 880;

    if (checkWidth() <= 768) {
        scrollPoss = 510;
    }

    if (checkWidth() <= 425) {
        scrollPoss = 350;
    }

    let leftPos = $('.trending-section').scrollLeft();
    $(".trending-section").animate({ scrollLeft: leftPos - scrollPoss }, 800);

})

// scroll detect increase opacity

$(window).scroll(function () {

    let fadeStart = 100
    let fading = $('#getStarted')
    let windowHeight = $(window).height();
    let offset = $(window).scrollTop()
    let opacity = .50;
    let documentHeight = $(document).height();

    const atBottom = windowHeight + offset === documentHeight;

    if (offset <= fadeStart) {
        opacity = 1;
    }
    if (!atBottom) {

        opacity = .20;
    }
    if (atBottom) {

        fading.slideDown("slow", function () {
        });
    }
    fading.css('opacity', opacity)
})


//detect stop scroll

$(window).scroll(function () {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function () {

        $("#getStarted").animate({
            opacity: '1',
        }, 350, function () {

        });

    }, 200));
});


//mobile nav control

$('#mobileCatClick').click(() => {

    $('.mobile-nav-all-cat').slideDown('slow', function () {
        $('.mobile-nav-all-cat').css('display', 'flex');
    })
    $('#body').css('position', 'relative');
    $('#body').css('overflow', 'hidden');
})

$('#mobileNavClose').click(() => {
    $('.mobile-nav-all-cat').slideUp('slow', function () {
        $('.mobile-nav-all-cat').css('display', 'none');
    })
    $('#body').css('position', 'relative');
    $('#body').css('overflow', 'auto');

})


$('#showMenu').click(() => {

    $('.mobileMenuContainer').fadeIn('slow', function () {
        $('.mobileMenuContainer').css('display', 'flex');
    })
    $('#body').css('position', 'relative');
    $('#body').css('overflow', 'hidden');
})

$('#closeButtonMobile').click(() => {
    $('.mobileMenuContainer').fadeOut('slow', function () {
        $('.mobileMenuContainer').css('display', 'none');
    })
    $('#body').css('position', 'relative');
    $('#body').css('overflow', 'auto');

})