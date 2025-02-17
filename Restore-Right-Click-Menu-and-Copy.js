// ==UserScript==
// @name         Restore Right Click Menu and Copy Function
// @namespace    https://github.com/lowji194
// @version      0.1
// @description  Khôi phục menu chuột phải và chức năng sao chép bị chặn trên trang web
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Khôi phục menu chuột phải
    // Loại bỏ các sự kiện chặn menu chuột phải
    document.addEventListener('contextmenu', function(e) {
        e.stopImmediatePropagation(); // Ngừng sự kiện này ngay lập tức
    }, true); // Đặt thứ tự bắt sự kiện là true (giai đoạn capturing)

    // Đảm bảo không có sự kiện khác nào chặn menu chuột phải
    window.addEventListener('contextmenu', function(e) {
        e.stopImmediatePropagation(); // Ngừng sự kiện này ngay lập tức
    }, true); // Đặt thứ tự bắt sự kiện là true (giai đoạn capturing)

    // Khôi phục chức năng sao chép
    // Bỏ qua các sự kiện ngăn chặn sao chép
    document.addEventListener('copy', function(e) {
        e.stopImmediatePropagation(); // Ngừng sự kiện này ngay lập tức
    }, true);

    // Bỏ qua sự kiện ngăn cản việc chọn văn bản
    document.addEventListener('selectstart', function(e) {
        e.stopImmediatePropagation(); // Ngừng sự kiện này ngay lập tức
    }, true);

    // Bỏ qua bất kỳ sự kiện nào ngăn chặn sao chép
    document.addEventListener('mousedown', function(e) {
        e.preventDefault();  // Ngăn sự kiện mặc định
        e.stopPropagation(); // Ngừng sự kiện này ngay lập tức
    }, true);

    // Loại bỏ CSS chặn sao chép nếu có
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            user-select: text !important; /* Cho phép chọn văn bản */
        }
        body {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
        }
    `;
    document.head.appendChild(style);
    console.log('Script đang hoạt động');
})();
