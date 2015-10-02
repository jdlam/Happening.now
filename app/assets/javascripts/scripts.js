console.log('scripts.js loaded');
var $window = $(window);

function checkWidth() {

  if (window.matchMedia("(max-width:600px)").matches) {
    $('#navbar').removeClass('showNav').addClass('hideNav');
  } else {
    $('#navbar').removeClass('hideNav').addClass('showNav');
  }
}

function bindTitleListener() {
  console.log('binded');
  $('#title').on('click', function(e) {
      console.log('click');
      e.preventDefault();
      if($('#navbar').hasClass('hideNav')) {
        $('#navbar').removeClass('hideNav').addClass('showNav');
        $('#login-form').removeClass('show').addClass('hidden');
        $('#signup-form').removeClass('show').addClass('hidden');
      } else {
        $('#navbar').css({'height': ''});
        $('#navbar').delay(1000).removeClass('showNav').addClass('hideNav');
      }
  });
}

function bindLoginListener() {
  $('#login-button').on('click', function(e){
    e.preventDefault();
    if ($('#login-form').height() > 0) {
      $('#login-form').removeClass('show').addClass('hidden');
    } else {
      $('#navbar').css({'height': 'auto'})
      $('#signup-form').removeClass('show').addClass('hidden');
      $("#login-form").removeClass('hidden').addClass('show');
    }
  })
}

function bindSignupListener() {
  $('#signup-button').on('click', function(e){
    e.preventDefault();
    if ($('#signup-form').height() > 0) {
      $('#signup-form').removeClass('show').addClass('hidden');
    } else {
      $('#navbar').css({'height': 'auto'})
      $('#login-form').removeClass('show').addClass('hidden');
      $("#signup-form").removeClass('hidden').addClass('show');
    }
  })
}

function checkHappeningList() {
  if ($('ul#happening-list:empty').length < 1) {
    var notice = $('<h1>').attr('class', 'notice').text("You haven't created");
    var notice2 = $('<h1>').attr('class', 'notice').text("any events");

    $('#happening-list').append(notice).append(notice2);
  } else {
    $('.notice').remove();
  }
}




$(document).ready(function(){
  checkWidth();
  bindTitleListener();
  bindLoginListener();
  bindSignupListener();
  checkHappeningList();
});
