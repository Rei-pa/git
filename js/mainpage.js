/*$(".owl-carousel").owlCarousel({
  loop: true, // 循環播放
  margin: 10, // 外距 10px
  nav: true, // 顯示點點
  responsive: {
    0: {
      items: 3 // 螢幕大小為 0~600 顯示 1 個項目
    },
    600: {
      items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
    },
    1440: {
      items: 1 // 螢幕大小為 1000 以上 顯示 5 個項目
    }
  }
});*/

/*$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    animateOut: 'animate__fadeOut',   // 使用淡出效果
    animateIn: 'animate__fadeIn',     // 使用淡入效果
    smartSpeed: 2000,

  });
});*/

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu");
  const mobileNav = document.querySelector(".mobile-nav");
  const overlay = document.createElement("div"); 
  overlay.classList.add("overlay");
  document.body.appendChild(overlay); // 將 overlay 添加到 body 中

  // 點擊漢堡選單圖標，切換選單的顯示與隱藏
  hamburger.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      overlay.classList.toggle("open", isOpen); // 控制 overlay 顯示
      hamburger.classList.toggle("open", isOpen); // 控制 icon 切換
  });

  // 點擊 overlay 區域，隱藏選單
  overlay.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      overlay.classList.remove("open");
      hamburger.classList.remove("open");
  });

  // 點擊列表內的項目時，也隱藏選單
  mobileNav.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
          mobileNav.classList.remove("open");
          overlay.classList.remove("open");
          hamburger.classList.remove("open");
      }
  });
});
