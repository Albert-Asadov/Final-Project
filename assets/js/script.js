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
})
