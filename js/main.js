
$('.nav li').click(function(){
    $(this).addClass('is-active').siblings().removeClass('is-active');
  });