var map;
function initMap() {


        var myLatLng = {lat: 19.252803, lng: -103.712044};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'California ribs'
        });
      }