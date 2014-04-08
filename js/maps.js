function initialize() {
    var mapNUS = {
        center: new google.maps.LatLng(1.296705, 103.774354),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapnus = new google.maps.Map(document.getElementById("nus"), mapNUS);
    var mapKTH = {
        center: new google.maps.LatLng(59.348049, 18.073533),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapkth = new google.maps.Map(document.getElementById("kth"), mapKTH);
}

google.maps.event.addDomListener(window, 'load', initialize);