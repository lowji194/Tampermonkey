// ==UserScript==
// @name         Auto Console Log with Counter Every 5 Seconds
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Log thông tin mỗi 5 giây với bộ đếm
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Khởi tạo bộ đếm
    let counter = 1;

    // Thực hiện console.log mỗi 5 giây (5000ms) với bộ đếm
    setInterval(function() {
        console.log(`Thông báo số: ${counter}`);
        counter++;  // Tăng giá trị bộ đếm lên 1 mỗi lần log
    }, 5000); // 5000 milliseconds = 5 giây
})();
