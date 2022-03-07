function initializeMap() {
    var coord = { lat: 4.57937, lng: -74.2190087 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: coord,
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map,
    });
}