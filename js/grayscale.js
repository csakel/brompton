//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeOutSine');
        event.preventDefault();
    });
});

//Google Map Skin - Get more at http://snazzymaps.com/
var myOptions = {
    zoom: 15,
    center: new google.maps.LatLng(37.9462057, 23.7117398),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    styles:  [{featureType:"administrative",stylers:[{visibility:"off"}]},
            {featureType:"poi",stylers:[{visibility:"simplified"}]},
            {featureType:"road",elementType:"labels",stylers:[{visibility:"simplified"}]},
            {featureType:"water",stylers:[{visibility:"simplified"}]},
            {featureType:"transit",stylers:[{visibility:"simplified"}]},
            {featureType:"landscape",stylers:[{visibility:"simplified"}]},
            {featureType:"road.highway",stylers:[{visibility:"off"}]},
            {featureType:"road.local",stylers:[{visibility:"on"}]},
            {featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},
            {featureType:"water",stylers:[{color:"#84afa3"},{lightness:52}]},
            {stylers:[{saturation:-17},{gamma:0.36}]},
            {featureType:"transit.line",elementType:"geometry",stylers:[{color:"#3f518c"}]}]
                };


var map = new google.maps.Map(document.getElementById('map'), myOptions);

var myLatlng = new google.maps.LatLng(37.9462057, 23.7117398);

var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: 'img/medicine.png'

});
