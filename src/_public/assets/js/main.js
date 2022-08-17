// Function slick slider
// var json = [
//     { "img_url": "assets/img/banner1.png" },
//     { "img_url": "assets/img/banner2.png" },
//     { "img_url": "assets/img/banner3.png" }
//   ];
//   $.each(json, function () {
//     var image = this["img_url"];
//     console.log(image);
//     $(".c-mainvisual").append(`
//          <div class="c-mainvisual" style="background:url(${image}) no-repeat center; backgroud-size:cover"></div>
//     `);
//   });
  $(document).ready(function(){
    $('.c-mainvisual').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 2000,
        fade: true,
        dots: false,
        cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        swipe: false
      });
  });


  $( ".c-mainvisual__scrolltexta" ).click(function() {
    
      $("#c-about").animate({scrollTop:0}, 2000, "linear",function(){});
      
  });


// Function click button open menu
const $menu = $('.c-menu')
$('.c-header__btnopen').click( function() {
    $menu.show(2000);
    $('.c-header__btnopen').fadeOut(2000);
    $('.c-header__btnclose').fadeIn(2000);
});
$('.c-header__btnclose').click( function() {
    $menu.hide(2000);
    $('.c-header__btnopen').fadeIn(2000);
    $('.c-header__btnclose').fadeOut(2000);
});

//Function swap tab
$(function() {
  $('.c-tab li:first-child').addClass('is-active');
  $('.c-tabcontent').hide(500);
  $('.c-tabcontent:first').show(500);
  $('.c-tab li').click(function(){
    $('.c-tab li').removeClass('is-active');
    $(this).addClass('is-active');
    $('.c-tabcontent').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
});


//Scroll
jQuery(function($) {
  
  var doAnimations = function() {
    
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.is-animatable');
    
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
		$animatables.each(function() {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('is-animatable').addClass('is-animated');
			}
    });

	};
  
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

function backtotop() {
  var $recruitBtn = $(".is-backtotop");
  $recruitBtn.addClass(".is-hidetop");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $recruitBtn.removeClass(".is-hidetop");
    } else {
      $recruitBtn.addClass(".is-hidetop");
    }
  });
}

$(".is-backtotop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 2000);
  return false;
});


