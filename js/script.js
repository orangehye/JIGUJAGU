// top-banner-slide
new Swiper(".sw-top", {
  loop: true,
  effect: "fade",
  speed: 1000,
  spaceBetween: 0,
  pagination: {
    el: ".slide-nav",
  },
  slideActiveClass: "on",
  autoplay: {
    delay: 3200,
    disableOnInteraction: false,
  },
});

// top-banner 위로 올라가기
// $(window).on()

// top-banner x버튼 클릭 시 없어지게 하기
$(document).ready(function () {
  $(".x-btn").click(function(){
    $(".top-banner").slideUp()
  })
})

// 헤더 스크롤해도 탑에 고정
$(document).ready(function(){
  const header = $("header")
  let headerOffsetTop = header.offset().top;
  $(window).on('scroll',function(){
    let $scrollTop = $(this).scrollTop()
    if($scrollTop > headerOffsetTop) {
      header.addClass(`sticky`)
    }else {
      header.removeClass(`sticky`)
    }
  })
})

// 상품 검색 클릭해도 안없어지기
const searchKeyword = $("#keyword")
searchKeyword.click(function(e){
  e.stopPropagation();
})

// search-box 클릭 시 나오게 하기
$(document).ready(function () {
  $(".search").click(function () {
    let temp = $(this).hasClass("active")
    if(temp){
      $(this).removeClass("active")
      $(".icon ul .search .search-box").stop().hide();
    }else {
      $(this).addClass("active")
      $(".icon ul .search .search-box").stop().fadeIn(500); 
    }
    e.stopImmediatePropagation();
  });
  // search-box x버튼 클릭 시 없어지게 하기
  $(".icon ul .search .search-box .top-search button").click(function(e){
    e.stopPropagation();
    $(".icon ul .search .search-box").stop().hide();
  })
});

// visual-slide
let swVisual = new Swiper(".sw-visual", {
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteration: false,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// gotop 버튼
// $(window).scroll(function(){
//   if($(this).scrollTop() > 200){
//     goTop.stop().fadeIn(1000);
//   }else {
//     goTop.stop().fadeOut(1000);
//   }
// })



// gotop 버튼
const goTop = document.querySelector(".gotop");
goTop.addEventListener("click", function () {
  {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

// gotop 버튼 스크롤이 200된 지점부터 나오게 하기
$(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.gotop').fadeIn(1000); //fadein되는 시간
    } else {
      $('.gotop').fadeOut(1000);
    }
 })
})