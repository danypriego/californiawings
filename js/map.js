var map;
var marker;
var myLatLngColima ={lat: 19.252877, lng: -103.712046};
var myLatLngMorelia = {lat: 19.684731, lng: -101.165395};
var myLatLngTepic ={lat: 18.916424, lng: -103.877643};
var myLatLngPuertoVallarta ={lat: 20.655870, lng: -105.231581};
 
var myLatLngSanJuan ={lat: 20.382560, lng: -99.994315}

function initMap() {
  colima();
}

document.getElementById("sucursal01").onclick = function(){
  map.setCenter(myLatLngColima);
  marker.setPosition(myLatLngColima);
  marker.setTitle("Ejemplo");
}
document.getElementById("sucursal02").onclick = function(){
  map.setCenter(myLatLngMorelia);
  marker.setPosition(myLatLngMorelia);
  marker.setTitle("Ejemplo");
}
document.getElementById("sucursal03").onclick = function(){
  map.setCenter(myLatLngTepic);
  marker.setPosition(myLatLngTepic);
  marker.setTitle("Ejemplo");
}
document.getElementById("sucursal04").onclick = function(){
  map.setCenter(myLatLngPuertoVallarta);
  marker.setPosition(myLatLngPuertoVallarta);
  marker.setTitle("Ejemplo");
}
document.getElementById("sucursal05").onclick = function(){
  map.setCenter(myLatLngSanJuan);
  marker.setPosition(myLatLngSanJuan);
  marker.setTitle("Ejemplo");
}
function colima(){
        //Sucursal Colima
        var myLatLng = {lat: 19.252877, lng: -103.712046};

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: myLatLng
        });

        marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'California ribs, wings & beer - Colima'
        });
}
