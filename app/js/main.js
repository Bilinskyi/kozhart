
$(document).ready(function(){

	$(window).on('load resize', function() {
	});
	
 $(window).resize(function() {

 });

 $('.prod-item').matchHeight();

 $('.tabs-caption').on('click', 'li:not(.active)', function() {
  $(this)
  .addClass('active').siblings().removeClass('active')
  .closest('div.tabs').find('.tabs-container').removeClass('active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('active').css('display', 'block').animate({opacity: '1'}, 300);

})


 $("a.modal-form").fancybox({
  'hideOnContentClick': true,
  fitToView: false,
  minWidth : 230,
  padding : 0,
  closeBtn : true
  
});


});
