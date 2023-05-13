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
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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



  $('.products').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<i class="fa-solid fa-angle-right next_arrow"></i>',
    prevArrow: '<i class="fa-solid fa-chevron-left prev_arrow"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  var WishlistPanel = document.querySelector(".panelWish");
  var wishlistButton = document.querySelector(".wishlist");

  wishlistButton.addEventListener("click",function(){
    WishlistPanel.style.display = "block";
  })


  let input = document.querySelector(".quantityInput")

  function handleIncreaseQuantity(){
        input.value++
  }
  function handleDEcreaseQuantity(){
    
    if(input.value <=1){
      
    }
    else{
      input.value--
    }
}

var MainImage = document.querySelector(".mainImage img");

var FalseImages = document.querySelectorAll(".images img")


function MainImageFunction(){
    [...FalseImages].forEach(Image=>{

        Image.onclick = function(){
          [...FalseImages].forEach(falseImg =>{
            falseImg.className = "images"
          })
          let src = Image.getAttribute("src");
          MainImage.src = src;
          Image.className = "images active"
        }

        Image.onmouseover = function(){
          [...FalseImages].forEach(falseImg =>{
            falseImg.className = "images"
          })
          let src = Image.getAttribute("src");
          MainImage.src = src;
          Image.className = "images active"
        }


    })

}
MainImageFunction()


