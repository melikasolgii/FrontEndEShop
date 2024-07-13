
$(document).ready(function(){

//navbar filter






  //popular products
 var swiper = new Swiper(".ourpopuler .swiper", {
  centeredSlides: true,
    effect: "coverflow",
    grabCursor: true,
    loop:true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2
      },
      1560: {
        slidesPerView: 3
      }
    }
  });
  
  
  


  // items button start

    var myswiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        483: {
          slidesPerView: 2
        },
        565:{
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 3
        },
        1560: {
          slidesPerView: 3
        }
      }
    });

 

    $('.swiper-filter').on( 'click', 'a', function() {
      var filter = $(this).attr('data-filter');
      
      $('.swiper-product .swiper-slide').css('display', 'none')
      $('.swiper-product .swiper-slide' + filter).css('display', '')
      // $( '.swiper-filter a' ).removeClass( 'swiper-active' );
      // $( this ).addClass( 'swiper-active' );
      
      productSwiper.updateSize();
      productSwiper.updateSlides();
      productSwiper.updateProgress();
      productSwiper.updateSlidesClasses();
      productSwiper.slideTo(0);
      productSwiper.scrollbar.updateSize();
    
   
      return false;
    });
  
    var filterSwiper = new Swiper ('.swiper-filter',{
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
      })
    
    var productSwiper = new Swiper('.swiper-product', {
        
       observer: true,
       loop: true,
        slidesPerView: 3,
        runCallbacksOnInit: true,
        observer: true,
      navigation: true,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,

      // breakpoints: {
      //   483: {
      //     slidesPerView: 2
      //   },
      //   565:{
      //     slidesPerView: 2
      //   },
      //   768: {
      //     slidesPerView: 3
      //   },
      //   1024: {
      //     slidesPerView: 3
      //   },
      //   1560: {
      //     slidesPerView: 3
      //   },
      // 2700:{
      //   slidesPerView:3
      // }
      // },

        // spaceBetween: 30,
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        // // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable : true,
        // },

        // scrollbarHide:false,
        // updateOnImagesReady: true
      })
    
  });