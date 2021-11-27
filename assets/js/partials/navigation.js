$(document).ready(function(){

  var body = $('body');

  body.on('click','.nav-trigger',function(){

      $('.main-navigation').addClass('_active');

  });

  body.on('click','.nav-close',function(){

      $('.main-navigation').removeClass('_active');

  });

});