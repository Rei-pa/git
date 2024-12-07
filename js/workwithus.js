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
