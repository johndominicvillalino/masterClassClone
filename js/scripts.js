
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

    
    if(checkWidth() <= 768) {
        scrollPoss = 510;
    }

    if(checkWidth() <= 425){
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
    
        if(checkWidth() <= 768) {
        scrollPoss = 510;
    }

    if(checkWidth() <= 425){
        scrollPoss = 350;
    }

    let leftPos = $('.trending-section').scrollLeft();
    $(".trending-section").animate({ scrollLeft: leftPos - scrollPoss }, 800);

})