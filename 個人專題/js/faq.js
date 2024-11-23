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
