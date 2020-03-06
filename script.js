$(document).ready(function() {
  $('.circle').click(function(){
    $('.page').fadeOut("fast");
    $('#P'+$(this).attr('target')).fadeIn("fast");
        });
});
