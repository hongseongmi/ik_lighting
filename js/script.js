
$(document).ready(function(){
    // banner swiper
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        effect:"fade",
        autoplay:{
            delay:2500,
            disableOninteraction:false,
            loop:true,
        }
      });

      // banner 모바일ver 서브메뉴 btn 액티브 클래스제어
      // 버튼 클릭했을때 서브메뉴 액티브 추가해서 열고닫기
      $('.logo-btn-box').click(function(){
        $('.header').toggleClass('active');
      });


      // sec-3 가로스크롤
      gsap.registerPlugin(ScrollTrigger);

      let sections = gsap.utils.toArray(".horizontal-box");
      // matchMedia 안에 넣어서 1150 이상일때 가로스크롤 실행, 이하일때 없애줌
      ScrollTrigger.matchMedia({
         ' (min-width:1150px)':function(){
          
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".sec-3 .container",
          pin: true,
          scrub: 1,
          // snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".sec-3 .container").offsetWidth
          
        }

      });
          },
          '(max-width: 1149px)':function(){
            
      
          }
      });

    //   sec-5 swiper
      var swiper = new Swiper(".secSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        effect:"fade",
        autoplay:{
            delay:2500,
            disableOninteraction:false,
            loop:true,
        }
      });
});//end







