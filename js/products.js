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
    image: "img/chopin.png",
    origin: "哥斯大黎加",
    region: "塔拉薩",
    roast: "淺烘焙",
    process: "葡萄乾蜜處理",
    flavor: "奶油 / 蜂蜜 / 咖啡花 / 檸檬柑橘 / 蘋果",
  },
  {
    id: 2,
    title: "哥斯大黎加 蜜娜祖莊園 酒桶靜置",
    image: "img/mirazu.png",
    origin: "哥斯大黎加",
    region: "蜜娜祖莊園",
    roast: "淺焙",
    process: "酒桶靜置 葡萄乾蜜處理",
    flavor: "葡萄軟糖 / 酒漬櫻桃 / 麥芽糖 / 蘭姆酒桶香氣",
  },
  {
    id: 3,
    title: "肯亞 冽里卡穆旺吉 AA TOP",
    image: "img/wangi.png",
    origin: "肯亞",
    region: "冽里",
    roast: "淺焙",
    process: "水洗",
    flavor: "紫羅蘭 /黑櫻桃 / 藍莓 / 黑嘉麗軟糖",
  },
  {
    id: 4,
    title: "衣索比亞 古吉 烏拉嘎 所羅門 G1",
    image: "img/guji.png",
    origin: "衣索比亞",
    region: "古吉",
    roast: "淺焙",
    process: "日曬",
    flavor: "草莓 / 藍莓 / 桃子 / 花果香",
  },
];

// 從 URL 獲取查詢參數
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
console.log("Full URL:", window.location.href);
console.log("URL Search Params:", params.toString());
console.log("Product ID from URL:", productId);

// 渲染商品內容
if (!isNaN(productId)) {
  renderProduct(productId);
} else {
  console.error("Invalid Product ID in URL");
  document.querySelector(".product-detail").innerHTML = "<h2>Invalid Product ID</h2>";
}

// 渲染函數
function renderProduct(productId) {
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
    console.error("Product not found for ID:", productId);
    document.querySelector(".product-detail").innerHTML = "<h2>Product not found</h2>";
  }
}