document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".sidebar-item a");

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            // Loại bỏ lớp active từ tất cả các mục menu
            menuItems.forEach(menu => menu.classList.remove("active"));
            // Thêm lớp active vào mục menu được nhấp
            this.classList.add("active");
        });
    });
});
