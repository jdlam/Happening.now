console.log('scripts.js loaded');
var $window = $(window);

function checkWidth() {
  if(window.matchMedia("(max-width:600px)").matches){
    $('div.navbar').slideUp('400');
    $('div.navbar').addClass('hidden');
    removeNavBarListener();
    bindNavBarListener();
  } else {
    $('div.navbar').slideDown('400');
    $('div.navbar').removeClass('hidden');
    removeNavBarListener();
  }
}

function bindNavBarListener() {
  $('#title').on('click', function(e){
    e.preventDefault();
    if ($('div.navbar').hasClass('hidden')) {
      $('div.navbar').removeClass('hidden')
      $('div.navbar').slideDown('400');
    } else {
      $('div.navbar').addClass('hidden');
      $('div.navbar').slideUp('400');
    }
  })
}

function removeNavBarListener() {
  $('#title').off('click');
}

function bindLoginListener() {
  $('#login-button').on('click', function(e){
    e.preventDefault();
    $('#signup-form').slideUp('400', function(){
      $('#login-form').slideToggle('400');
    });
  })
}

function bindSignupListener() {
  $('#signup-button').on('click', function(e){
    e.preventDefault();
    $('#login-form').slideUp('400', function(){
      $('#signup-form').slideToggle('400');
    });
  })
}

function checkHappeningList() {
  if ($('ul#happening-list:empty').length < 1) {
    console.log('empty')
    var notice = $('<h1>').attr('class', 'notice').text("You haven't created");
    var notice2 = $('<h1>').attr('class', 'notice').text("any events");

    $('#happening-list').append(notice).append(notice2);
  } else {
    console.log('not empty')
    $('.notice').remove();
  }
}

$(document).ready(function(){
  checkWidth();
  $window.resize(function() {
    checkWidth();
  });
  $('div#login-form').hide();
  bindLoginListener();
  $('div#signup-form').hide();
  bindSignupListener();
  checkHappeningList();
});
