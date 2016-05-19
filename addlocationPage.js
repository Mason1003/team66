// Code for the Add Location page.
function initMap(){
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom : 16,
        center:{lat:-37.912,lng:145.131}
    });
    var geocoder = new google.maps.Geocoder();
    
    document.getElementById('submit').addEventListener('click',function(){
        geocoderAddress(geocoder,map);
    });
}

function geocoderAddress(geocoder,resultsMap){
    var address = document.getElementById('address').value;
    geocoder.geocode({'address':address},function(results,status){
        if (status === google.maps.GeocoderStatus.OK){
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        }else {
            alert ('geocode was not successful for the following reason : ' + status);
        }
    });
}

