$(".owl-carousel").owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    nav: true, // 顯示點點
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      600: {
        items: 1 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1440: {
        items: 1 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });

  document.querySelectorAll(".shop-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
  
      const productId = button.getAttribute("data-id");
      window.location.href = `products.html?id=${productId}`;
    });
  });
  
