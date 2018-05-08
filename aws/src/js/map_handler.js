var map;


var initMap = function (lati, long) {
    var myPosition = {
        lat: lati,
        lng: long
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: myPosition,
        zoom: 15
    });

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

    var marker = new google.maps.Marker({
        position: myPosition,
        map: map,
    });
}
var findParking = function (lati, long) {
    var parkingArea = {
        lat: lati,
        lng: long
    };

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

    var marker = new google.maps.Marker({
        position: parkingArea,
        map: map,
        icon: iconBase + 'parking_lot_maps.png'
    });
}


$(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        initMap(position.coords.latitude, position.coords.longitude);
    });

    $('#take_me_to_russia').click(function () {
        initMap(59.968736, 30.417047);
        $('body').css({
            'background-image': 'url("https://media.giphy.com/media/VXJXH8d3Q3ByE/giphy.gif")',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center'
        });
    });
    
    $('#find_parking').click(function () {
        findParking(37.724704, -122.480776);
    });

});