var markersArray = [];
var pos = {};

$(document).ready(function(){
  console.log('map loaded');
  initMap();
  bindListeners();
  bindCenter();
});

function initMap() {

	//map options
	var mapOptions = {
		zoom: 16,
		center: new google.maps.LatLng(40.740089499999996, -73.9895111),
		panControl: false,
		panControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_LEFT
		},
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		scaleControl: false

	};

	//Fire up Google maps and place inside the map-canvas div
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function bindListeners() {
  $('.happening').on('click', function(){
    alert('clicked');
    console.log("id: " + $(this).find('.happening-id').val());
  })
}

function generateMarker(data) {
  clearMarkers();
	var infowindow = new google.maps.InfoWindow();
  console.log(data);

	var contentString = '<div class="markerPop">' +
		'<strong>' + data.name.toUpperCase() + '</strong>' +
		'<p>' + data.description + '</p>' +
		'<span>' + data.address + '</span><br />' +
		'<span>' + data.city + ',  ' + data.state + '</span>' +
		'</div>';
	var latitude = data.latitude;
	var longitude = data.longitude;

	//set the markers.
	var myLatLng = new google.maps.LatLng(latitude,longitude);
	marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'happening',
		animation: google.maps.Animation.DROP
	});
  markersArray.push(marker);

	marker.addListener('click', function () {
		infowindow.setContent(contentString);
		infowindow.open(map, this);
	});

	//  Make an array of the LatLng's of the markers you want to show
	//  Create a new viewpoint bound
	var bounds = new google.maps.LatLngBounds();

	//  Fit these bounds to the map
  bounds.extend(myLatLng);
  map.fitBounds(bounds);
  map.setZoom(13);
}

function clearMarkers() {
  for (var i=0; i<markersArray.length; i++) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}

function calculateCenter() {
	center = map.getCenter();
}

function bindCenter() {
	google.maps.event.addDomListener(map, 'idle', function() {
		calculateCenter();
	});
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(center);
	});
}
