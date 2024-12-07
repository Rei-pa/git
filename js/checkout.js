document.addEventListener('DOMContentLoaded', () => {
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');
  
    // 台灣縣市和區域對應資料
    const taiwanLocations = {
      "台北市": ["中正區", "大安區", "信義區", "士林區", "內湖區", "南港區", "北投區", "文山區", "松山區", "大同區", "萬華區"],
      "新北市": ["板橋區", "新莊區", "中和區", "永和區", "三重區", "淡水區", "汐止區", "樹林區", "土城區", "林口區"],
      "桃園市": ["桃園區", "中壢區", "平鎮區", "八德區", "楊梅區", "蘆竹區", "龜山區", "大園區"],
      "台中市": ["西屯區", "北屯區", "南屯區", "大里區", "太平區", "沙鹿區", "豐原區", "潭子區"],
      "台南市": ["安平區", "中西區", "東區", "南區", "北區", "永康區", "新營區", "善化區"],
      "高雄市": ["左營區", "前鎮區", "三民區", "苓雅區", "鳳山區", "鼓山區", "楠梓區", "小港區"],
      "基隆市": ["中正區", "信義區", "仁愛區", "安樂區", "暖暖區"],
      "新竹市": ["東區", "北區", "香山區"],
      "嘉義市": ["東區", "西區"],
      "新竹縣": ["竹北市", "竹東鎮", "湖口鄉", "新豐鄉"],
      "苗栗縣": ["苗栗市", "頭份市", "竹南鎮", "卓蘭鎮"],
      "彰化縣": ["彰化市", "鹿港鎮", "和美鎮", "員林市"],
      "南投縣": ["南投市", "埔里鎮", "草屯鎮"],
      "雲林縣": ["斗六市", "斗南鎮", "虎尾鎮"],
      "嘉義縣": ["太保市", "朴子市", "大林鎮"],
      "屏東縣": ["屏東市", "潮州鎮", "東港鎮"],
      "宜蘭縣": ["宜蘭市", "羅東鎮", "蘇澳鎮"],
      "花蓮縣": ["花蓮市", "鳳林鎮", "玉里鎮"],
      "台東縣": ["台東市", "成功鎮", "關山鎮"],
      "澎湖縣": ["馬公市", "湖西鄉", "白沙鄉"],
      "金門縣": ["金城鎮", "金湖鎮", "金沙鎮"],
      "連江縣": ["南竿鄉", "北竿鄉", "莒光鄉"]
    };
  
    // 初始化縣市選單
    Object.keys(taiwanLocations).forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  
    // 當縣市變更時更新區域選單
    citySelect.addEventListener('change', () => {
      const selectedCity = citySelect.value;
      const districts = taiwanLocations[selectedCity] || [];
  
      // 清空區域選單
      districtSelect.innerHTML = '<option value="" disabled selected>選擇區域</option>';
  
      // 根據選擇的城市新增區域選項
      districts.forEach(district => {
        const option = document.createElement('option');
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
      });
    });
  });

  document.querySelectorAll('input[name="payment-method"]').forEach(method => {
    method.addEventListener('change', (event) => {
      if (event.target.value === 'credit-card') {
        console.log("信用卡被選中，可以顯示額外欄位！");
        // 顯示信用卡輸入框（可以新增對應 HTML 和顯示邏輯）
      } else {
        console.log("Line Pay 被選中，隱藏信用卡輸入框！");
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const subtotalEl = document.getElementById('subtotal');
    const discountEl = document.getElementById('discount');
    const totalEl = document.getElementById('total');
    const applyDiscountBtn = document.getElementById('apply-discount');
    const discountCodeInput = document.getElementById('discount-code');
  
    let subtotal = 1360; // 初始小計金額
    let discount = 0;
  
    const updateTotal = () => {
      const total = subtotal - discount;
      totalEl.textContent = total > 0 ? total : 0;
    };
  
    applyDiscountBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const discountCode = discountCodeInput.value.trim();
  
      if (discountCode === 'SAVE20') {
        discount = 286;
        discountEl.textContent = `-286`;
      } else {
        discount = 0;
        discountEl.textContent = `-0`;
        alert('折扣碼無效');
      }
  
      updateTotal();
    });
  
    updateTotal();
  });

  document.addEventListener('DOMContentLoaded', () => {
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const creditCardFields = document.getElementById('credit-card-fields');
    const linePayFields = document.getElementById('line-pay-fields');
    const checkoutForm = document.getElementById('checkout-form');
  
    // 當選擇付款方式時，顯示對應的欄位
    paymentMethods.forEach(method => {
      method.addEventListener('change', (event) => {
        const selectedPayment = event.target.value;
        if (selectedPayment === 'credit-card') {
          creditCardFields.classList.remove('hidden');
          linePayFields.classList.add('hidden');
        } else if (selectedPayment === 'line-pay') {
          linePayFields.classList.remove('hidden');
          creditCardFields.classList.add('hidden');
        }
      });
    });
  
    document.addEventListener('DOMContentLoaded', () => {
      const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
      const creditCardFields = document.getElementById('credit-card-fields');
      const linePayFields = document.getElementById('line-pay-fields');
      const checkoutForm = document.getElementById('checkout-form');
    
      // 當選擇付款方式時，顯示對應的欄位
      paymentMethods.forEach(method => {
        method.addEventListener('change', (event) => {
          const selectedPayment = event.target.value;
          if (selectedPayment === 'credit-card') {
            creditCardFields.classList.remove('hidden');
            linePayFields.classList.add('hidden');
          } else if (selectedPayment === 'line-pay') {
            linePayFields.classList.remove('hidden');
            creditCardFields.classList.add('hidden');
          }
        });
      });
    })
  })

  document.addEventListener('DOMContentLoaded', () => {
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const creditCardFields = document.getElementById('credit-card-fields');
    const linePayFields = document.getElementById('line-pay-fields');
    const checkoutForm = document.getElementById('checkout-form');
  
    // 當選擇付款方式時，顯示對應的欄位
    paymentMethods.forEach(method => {
      method.addEventListener('change', (event) => {
        const selectedPayment = event.target.value;
        if (selectedPayment === 'credit-card') {
          creditCardFields.classList.remove('hidden');
          linePayFields.classList.add('hidden');
        } else if (selectedPayment === 'line-pay') {
          linePayFields.classList.remove('hidden');
          creditCardFields.classList.add('hidden');
        }
      });
    });
  
    // 表單提交時跳轉到結帳成功頁面
    checkoutForm.addEventListener('submit', (event) => {
      event.preventDefault(); // 阻止表單默認提交行為
      const selectedPayment = document.querySelector('input[name="payment-method"]:checked');
  
      if (selectedPayment) {
        // 如果是信用卡，檢查輸入欄位是否完整
        if (selectedPayment.value === 'credit-card') {
          const cardNumber = document.getElementById('card-number').value.trim();
          const expiryDate = document.getElementById('expiry-date').value.trim();
          const cvv = document.getElementById('cvv').value.trim();
  
          if (!cardNumber || !expiryDate || !cvv) {
            alert('請完整填寫信用卡資訊');
            return;
          }
        }
  
        // 顯示結帳成功頁面
        displaySuccessPage();
      } else {
        alert('請選擇付款方式');
      }
    });
  
    // 顯示結帳成功頁面
    function displaySuccessPage() {
      // 創建結帳成功頁面的元素
      const successPage = document.createElement('div');
      successPage.id = 'success-page';
      successPage.style.position = 'fixed';
      successPage.style.top = '0';
      successPage.style.left = '0';
      successPage.style.width = '100%';
      successPage.style.height = '100%';
      successPage.style.backgroundColor = '#f9f9f9';
      successPage.style.display = 'flex';
      successPage.style.flexDirection = 'column';
      successPage.style.alignItems = 'center';
      successPage.style.justifyContent = 'center';
      successPage.style.zIndex = '1000';
      successPage.innerHTML = `
        <h1 style="color: #8b5e34;">結帳成功！</h1>
        <p style="font-size: 18px; color: #333;">感謝您的購買，我們會盡快處理您的訂單。</p>
        <p style="font-size: 16px; color: #666;">即將返回首頁...</p>
      `;
  
      // 將成功頁面插入到 DOM
      document.body.appendChild(successPage);
  
      // 3 秒後返回首頁
      setTimeout(() => {
        window.location.href = '/'; // 替換成你的首頁 URL
      }, 3000);
    }
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

  