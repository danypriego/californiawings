function initMap() {
        var myLatLng = {lat: 19.252877, lng: -103.712046};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'California ribs wings & beer - colima'
        });
      }