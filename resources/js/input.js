var placeSearch, autocomplete;

(function (window, document) {

    initAutocomplete('autolocation');

})(window, document);


function initAutocomplete(id) {
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById(id)),
        {types: ['geocode']});
    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
    });
}

function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}