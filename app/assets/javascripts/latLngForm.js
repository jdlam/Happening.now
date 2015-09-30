$(document).ready(function(){
  bindCreateHappeningForm();
})

function bindCreateHappeningForm() {
  $('form.create-happening').on('submit', function(e) {
    e.preventDefault();
    var address = $('#address').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var fullAddress = address + ', ' + city + ', ' + state;
    getInfo(fullAddress);
  })
}

function getInfo(fullAddress) {
  var token = $.ajaxSettings.headers["token"];
  delete $.ajaxSettings.headers["token"];

  $.ajax({
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    data:{address: fullAddress, key: 'AIzaSyB6ckRS4H7MN9Ltf6vioD6gwghkdz0NLf4'},
    success: function(data) {
      extractData(data);
    }
  })

  $.ajaxSettings.headers["token"] = token
}


function extractData(data) {
  latitudeVal = data.results[0].geometry.location.lat;
  longitudeVal = data.results[0].geometry.location.lng;
  var type = $('#event_type').val();
  var streetVal = $("#address").val();
  var cityVal = $("#city").val();
  var stateVal = $("#state").val();
  var nameVal = $("#name").val();
  var descriptionVal = $("#description").val();

  var happeningObject = {
    happenings: {
      event_type: type,
      name: nameVal,
      description: descriptionVal,
      address: streetVal,
      city: cityVal,
      state: stateVal,
      latitude: latitudeVal,
      longitude: longitudeVal
    }
  }
  createHappening(happeningObject);
}

function createHappening(data) {
  $.ajax({
    method: 'post',
    url: '/api/happenings',
    data: data,
    success: function(data) {
      happenings.fetch();
      clearForm();
    }
  })
}

function clearForm() {
  console.log('clearing...');
  $('#name').val('');
  $('#description').val('');
  $('#address').val('');
  $('#city').val('');
  $('#state').val('');
}
