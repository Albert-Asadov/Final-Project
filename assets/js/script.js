var login = document.querySelector(".login");
var panel = document.querySelector(".panel");
var empty = document.querySelector(".empty")

login.addEventListener("click", function(){
  
    empty.style.display = "block"
})


$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.responsive').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<i class="fa-solid fa-angle-right next_arrow"></i>',
    prevArrow: '<i class="fa-solid fa-chevron-left prev_arrow"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
