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

const MAX_QUANTITY = 20; // 最大數量限制

// 獲取所有數量控件的按鈕和輸入框
document.querySelectorAll('.quantity-control').forEach((control) => {
  const decreaseButton = control.querySelector('.btn-decrease');
  const increaseButton = control.querySelector('.btn-increase');
  const input = control.querySelector('.quantity-input');

  // 減少數量
  decreaseButton.addEventListener('click', () => {
    let currentValue = parseInt(input.value, 10); // 確保數值為整數
    if (currentValue > 1) {
      input.value = currentValue - 1;
      updateSubtotal(input); // 更新小計
      updateTotal(); // 更新總計
    }
  });

  // 增加數量
  increaseButton.addEventListener('click', () => {
    let currentValue = parseInt(input.value, 10); // 確保數值為整數
    if (currentValue < MAX_QUANTITY) { // 判斷是否小於最大數量
      input.value = currentValue + 1;
      updateSubtotal(input); // 更新小計
      updateTotal(); // 更新總計
    } else {
      alert(`此商品每次最多只能訂購 ${MAX_QUANTITY} 個`); // 提示用戶
    }
  });

  // 直接輸入數量
  input.addEventListener('input', () => {
    let currentValue = parseInt(input.value, 10); // 確保數值為整數
    if (isNaN(currentValue) || currentValue < 1) {
      input.value = 1; // 確保數量至少為 1
    } else if (currentValue > MAX_QUANTITY) {
      input.value = MAX_QUANTITY; // 如果超過最大值，重置為最大值
      alert(`此商品每次最多只能訂購 ${MAX_QUANTITY} 個`); // 提示用戶
    }
    updateSubtotal(input); // 更新小計
    updateTotal(); // 更新總計
  });
});

// 刪除商品
document.querySelectorAll('.remove-btn').forEach((removeButton) => {
  removeButton.addEventListener('click', () => {
    const row = removeButton.closest('tr'); // 找到刪除按鈕所在的行
    row.remove(); // 移除該行
    updateTotal(); // 更新總計
  });
});

// 更新小計金額
function updateSubtotal(input) {
  const row = input.closest('tr'); // 找到所在的行
  const priceText = row.querySelector('.price').textContent.trim(); // 獲取價格文字
  const price = parseFloat(priceText.replace(/[^0-9.]/g, '')); // 只提取數字部分（移除 $）

  const quantity = parseInt(input.value, 10); // 獲取數量，並確保為整數
  const subtotalCell = row.querySelector('.subtotal'); // 找到小計單元格

  // 計算小計，並更新顯示
  const subtotal = (price * quantity).toFixed(0);
  subtotalCell.textContent = `NT$${subtotal}`;
}

// 更新總計金額
function updateTotal() {
  let total = 0;

  // 遍歷所有的小計欄位，累加總金額
  document.querySelectorAll('.subtotal').forEach((subtotalCell) => {
    const subtotalText = subtotalCell.textContent.trim();
    const subtotal = parseFloat(subtotalText.replace(/[^0-9.]/g, '')); // 只提取數字部分
    total += subtotal;
  });

  // 更新總計欄位
  const totalPriceElement = document.querySelector('#total-price');
  totalPriceElement.textContent = `NT$${total}`;
}


