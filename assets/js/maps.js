function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 52.27042, lng: -9.70264 },
        { lat: 52.271823, lng: -9.686548 },
        { lat: 52.280248, lng: -9.702633 },
    ];
  // 52.280248,-9.702633,18z/data=!4m6!3m5!1s0x48453568658c5ac3:0x7bd379e99980494!8m2!3d52.2807046!4d-9.7026519

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}