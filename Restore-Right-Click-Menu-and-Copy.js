// ==UserScript==
// @name         Restore Text Selection, Right Click and Copy Function
// @namespace    https://github.com/lowji194
// @version      0.1
// @description  Khôi phục chức năng bôi đen, chuột phải và sao chép bị chặn trên các trang web
// @author       Lợi Nguyễn
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Bỏ qua sự kiện ngăn chặn chuột phải
    document.addEventListener('contextmenu', function(e) {
        e.stopImmediatePropagation(); // Ngừng sự kiện này ngay lập tức
    }, true);

    // Bỏ qua sự kiện ngăn chặn sao chép
    document.addEventListener('copy', function(e) {
        e.stopImmediatePropagation(); // Ngừng sự kiện này ngay lập tức
    }, true);

    // Bỏ qua sự kiện ngăn chặn việc chọn văn bản
    document.addEventListener('selectstart', function(e) {
        e.stopImmediatePropagation(); // Ngừng sự kiện này ngay lập tức
    }, true);

    // Loại bỏ các thuộc tính CSS ngăn chọn văn bản
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            user-select: text !important; /* Cho phép chọn văn bản */
        }
        *::selection {
            background-color: rgba(0, 0, 0, 0.2) !important; /* Màu nền khi chọn văn bản */
        }
        *::-moz-selection {
            background-color: rgba(0, 0, 0, 0.2) !important; /* Màu nền khi chọn văn bản cho Firefox */
        }
    `;
    document.head.appendChild(style);

    // Khôi phục lại khả năng sao chép
    document.addEventListener('copy', function(e) {
        const selectedText = window.getSelection().toString();
        if (selectedText) {
            e.clipboardData.setData('text/plain', selectedText);  // Đảm bảo sao chép nội dung đã chọn
            e.preventDefault(); // Ngừng hành động mặc định để sao chép nội dung người dùng đã chọn
        }
    });

    // Bắt sự kiện Ctrl + C để sao chép thủ công
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'c') {
            const selectedText = window.getSelection().toString();
            if (selectedText) {
                // Tạo một textarea tạm thời để sao chép nội dung
                const textarea = document.createElement('textarea');
                textarea.value = selectedText;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');  // Sao chép văn bản vào clipboard
                document.body.removeChild(textarea);  // Xóa textarea tạm thời
                e.preventDefault(); // Ngừng hành động mặc định để sao chép nội dung người dùng đã chọn
            }
        }

        // Ngừng hành động đối với các phím tắt như F12, Ctrl + U, Ctrl + Shift + I (chặn dev tools)
        if ((e.ctrlKey && e.key === 'u') || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
    });

    console.log('Script Đang hoạt động');
})();
