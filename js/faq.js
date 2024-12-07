// 取得所有的 FAQ 問題按鈕
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  // 找到每個問題按鈕和對應的答案及圖標
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon');

  // 為每個按鈕添加點擊事件
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // 收起所有 FAQ
    faqItems.forEach((el) => {
      el.classList.remove('open');
      el.querySelector('.faq-answer').style.display = 'none';
      el.querySelector('.faq-icon').textContent = '+'; // 重置為加號
    });

    // 展開或收起當前的項目
    if (!isOpen) {
      item.classList.add('open');
      answer.style.display = 'block';
      icon.textContent = '-'; // 切換為減號
    }
  });
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
