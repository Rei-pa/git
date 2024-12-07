document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const categories = document.querySelectorAll('.menu-category');
  const container = document.querySelector('.menu-container'); // 主內容容器
  const menuSection = document.querySelector('.menu-section'); // Menu 區塊

  // 定義每個分類的樣式
  const styles = {
      coffee: { 
          backgroundColor: '#daded6', 
          color: '#605f4b', 
          borderColor: '#605f4b',
          tabActiveColor: '#434233',
          tabInactiveColor: '#a1a1a1',
          sectionBackground: '#daded6', // menu-section 的背景顏色
          sectionColor: '#434233' // menu-section 的字體顏色
      },
      drinks: { 
          backgroundColor: '#605f4b', 
          color: '#c5c8c3', 
          borderColor: '#daded6',
          tabActiveColor: '#ffffff',
          tabInactiveColor: '#a1a1a1',
          sectionBackground: '#605f4b', 
          sectionColor: '#daded6'
      },
      snacks: { 
          backgroundColor: '#434233', 
          color: '#daded6', 
          borderColor: '#daded6',
          tabActiveColor: '#f1f1f1',
          tabInactiveColor: '#a1a1a1',
          sectionBackground: '#434233', 
          sectionColor: '#daded6'
      }
  };

  tabs.forEach(tab => {
      tab.addEventListener('click', (event) => {
          event.preventDefault(); // 阻止跳轉行為

          // 1. 移除所有 active 樣式
          tabs.forEach(t => t.classList.remove('active'));
          categories.forEach(c => c.classList.remove('active'));

          // 2. 激活當前選中的 Tab 和內容區域
          tab.classList.add('active');
          const target = tab.getAttribute('data-target');
          document.getElementById(target).classList.add('active');

          // 3. 修改父容器的背景顏色和字體顏色
          const { 
              backgroundColor, 
              color, 
              borderColor, 
              tabActiveColor, 
              tabInactiveColor, 
              sectionBackground, 
              sectionColor 
          } = styles[target];
          
          container.style.backgroundColor = backgroundColor;
          container.style.color = color;

          // 更新 menu-section 的背景和字體顏色
          menuSection.style.backgroundColor = sectionBackground;
          menuSection.style.color = sectionColor;

          // 4. 更新 Tab 的顏色
          tabs.forEach(t => {
              if (t === tab) {
                  t.style.color = tabActiveColor; // 選中 Tab 的字體顏色
              } else {
                  t.style.color = tabInactiveColor; // 未選中 Tab 的字體顏色
              }
              t.style.borderBottomColor = borderColor; // 更新 Tab 的邊框顏色
          });

          // 5. 更新列表底線的顏色
          container.style.setProperty('--border-color', borderColor); // 動態設置列表底線顏色
      });
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



