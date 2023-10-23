var $links = $(".itemlinks");

$links.click(function (e) {
    $links.removeClass("active");
    var clickedlink = e.target;
    clickedlink = $(clickedlink);
    var position = clickedlink.attr("data-pos");
    var translateValue = "translateX(" + position * 25 + "%)";
    $("#wrapper").css({
        transform: translateValue
    });

    clickedlink.addClass("active");

});

$($links[0]).addClass("active");