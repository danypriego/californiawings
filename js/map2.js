function initMap() {
//Sucursal Morelia
        var myLatLngMorelia = {lat: 0, lng: 0};

        var mapMorelia = new google.maps.Map(document.getElementById('mapMorelia'), {
          zoom: 16,
          center: myLatLngMorelia
        });

        var markerMorelia = new google.maps.Marker({
          position: myLatLngMorelia,
          map: mapMorelia,
          title: 'California ribs, wings & beer - Morelia'
        });

        //Sucursal Tepic
         var myLatLngTepic = {lat: 19.252877, lng: -103.712046};

        var map3 = new google.maps.Map(document.getElementById('map3'), {
          zoom: 16,
          center: myLatLngTepic
        });

        var markerTepic = new google.maps.Marker({
          position: myLatLngTepic,
          map: map3,
          title: 'California ribs wings & beer - colima'
        });

        //Sucursal Puerto Vallarta
        var myLatLngPuertoVallarta = {lat: 19.252877, lng: -103.712046};

        var map4 = new google.maps.Map(document.getElementById('map4'), {
          zoom: 16,
          center: myLatLngPuertoVallarta
        });

        var markerPuertoVallarta = new google.maps.Marker({
          position: myLatLngPuertoVallarta,
          map: map4,
          title: 'California ribs wings & beer - colima'
        });

        //Sucursal San Juan
         var myLatLngSanJuan = {lat: 19.252877, lng: -103.712046};

        var map5 = new google.maps.Map(document.getElementById('map5'), {
          zoom: 16,
          center: myLatLngSanJuan
        });

        var markerSanJuan = new google.maps.Marker({
          position: myLatLngSanJuan,
          map: map5,
          title: 'California ribs wings & beer - colima'
        });

      }