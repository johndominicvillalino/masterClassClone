$("#closeButton").click(function () {
    $("#discountdiv").slideUp("slow", function () {

    });
});

$('#rightBtn').click(function () {
    let rightPos = $('.trending-section').scrollLeft();
    $(".trending-section").animate({ scrollLeft: rightPos + 880 }, 800);

})


$('#leftBtn').click(function () {
    let leftPos = $('.trending-section').scrollLeft();
    $(".trending-section").animate({ scrollLeft: leftPos - 880 }, 800);

})