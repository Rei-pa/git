const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"), 10);

if (isNaN(productId)) {
  console.error("Invalid Product ID");
  document.querySelector(".product-detail").innerHTML = "<h2>Invalid Product ID</h2>";
} else {
  console.log("Loaded Product ID:", productId);
  renderProduct(productId);
}

function renderProduct(productId) {
  const products = [
    {
      id: 0,
      title: "The Barn 瓜地馬拉 弗雷哈內斯",
      image: "img/thebarn1.png",
      origin: "瓜地馬拉",
      region: "弗雷哈內斯",
      roast: "淺焙",
      process: "日曬",
      flavor: "櫻桃 / 棉花糖 / 奶油香草",
    },
    {
      id: 1,
      title: "哥斯大黎加 卡內特 音樂家系列 蕭邦",
      image: "img/product1.jpeg",
      origin: "哥斯大黎加",
      region: "塔拉薩",
      roast: "淺烘焙",
      process: "葡萄乾蜜處理",
      flavor: "奶油 / 蜂蜜 / 咖啡花 / 檸檬柑橘 / 蘋果",
    },
    {
      id: 2,
      title: "哥斯大黎加 蜜娜祖莊園 酒桶靜置",
      image: "img/product2.jpeg",
      origin: "哥斯大黎加",
      region: "蜜娜祖莊園",
      roast: "淺焙",
      process: "酒桶靜置 葡萄乾蜜處理",
      flavor: "葡萄軟糖 / 酒漬櫻桃 / 麥芽糖 / 蘭姆酒桶香氣",
    },
    {
      id: 3,
      title: "肯亞 冽里卡穆旺吉 AA TOP",
      image: "img/product3.jpeg",
      origin: "肯亞",
      region: "冽里",
      roast: "淺焙",
      process: "水洗",
      flavor: "紫羅蘭 /黑櫻桃 / 藍莓 / 黑嘉麗軟糖",
    },
    {
      id: 4,
      title: "衣索比亞 古吉 烏拉嘎 所羅門 G1",
      image: "img/product4.jpeg",
      origin: "衣索比亞",
      region: "古吉",
      roast: "淺焙",
      process: "日曬",
      flavor: "草莓 / 藍莓 / 桃子 / 花果香",
    },
  ];

  const product = products[productId];
  if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-origin").textContent = product.origin;
    document.getElementById("product-region").textContent = product.region;
    document.getElementById("product-roast").textContent = product.roast;
    document.getElementById("product-process").textContent = product.process;
    document.getElementById("product-flavor").textContent = product.flavor;
  } else {
    console.error("Product not found");
    document.querySelector(".product-detail").innerHTML = "<h2>Product not found</h2>";
  }
}

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


