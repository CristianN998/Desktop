function initializeMap() {
    var coord = { lat: 4.5783879, lng: -74.1551567 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: coord,
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map,
    });
}