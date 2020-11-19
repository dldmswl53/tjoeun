
$(document).ready(function(){
    $('.top-slide').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true
      });

      $('.sec2 .cont ul').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:2000,
      });
      
  });