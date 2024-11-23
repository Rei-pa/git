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
  