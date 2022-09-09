// preloder part js start
document.body.onload = function(){ /*The onload event occurs when an object has been loaded*/
  setTimeout(function(){
    var preloader = document.getElementById('page-preloader');
    {
      preloader.classList.add('done');
    }
  }, 5000);
}
// preloder part js end


// menu part js start
$(Window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling> 50){
      $(".navbar-light").addClass("bg-color")
    }else{
      $(".navbar-light").removeClass("bg-color")
    }
  })

  $(".scroll-icon i").click(function(){
    $("html,body").animate({
      scrollTop: 0,
    },1000)
  })
  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling>50){
      $(".scroll-icon i").fadeIn(500)
    }
    else{
      (scrolling>40)
        $(".scroll-icon i").fadeOut(500)
      }
  })
// menu part js end

// slick js
$('.review-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  Autoplay: true,
  nextArrow:".next-one",
  prevArrow:".prev-one",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false
      }
    },
  ]
});