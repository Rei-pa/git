document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('#cart-items tr');
    const totalPriceEl = document.getElementById('total-price');
  
    // 更新小計和總計
    const updateTotals = () => {
      let total = 0;
      cartItems.forEach(row => {
        const price = parseFloat(row.querySelector('.price').textContent.replace('$', ''));
        const quantity = parseInt(row.querySelector('.quantity-input').value);
        const subtotal = price * quantity;
        row.querySelector('.subtotal').textContent = `$${subtotal}`;
        total += subtotal;
      });
      totalPriceEl.textContent = `$${total}`;
    };
  
    // 處理數量變更
    cartItems.forEach(row => {
      row.querySelector('.quantity-input').addEventListener('input', updateTotals);
  
      // 處理移除按鈕
      row.querySelector('.remove-btn').addEventListener('click', () => {
        row.remove();
        updateTotals();
      });
    });
  
    updateTotals();
  });
  
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
