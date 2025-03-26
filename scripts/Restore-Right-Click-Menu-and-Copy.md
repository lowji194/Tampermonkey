## Bước 1: Cài đặt Tampermonkey

Nếu bạn chưa cài đặt **Tampermonkey**, làm theo các bước sau:

- **Google Chrome**: Truy cập [Chrome Web Store - Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) và nhấn **Add to Chrome**.
- **Firefox**: Truy cập [Mozilla Add-ons - Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/) và nhấn **Add to Firefox**.
- **Microsoft Edge**: Truy cập [Microsoft Edge Add-ons - Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) và nhấn **Get**.

## Bước 2: Tạo một Script mới trong Tampermonkey

1. **Mở Tampermonkey**:
   - Nhấp vào biểu tượng Tampermonkey trên thanh công cụ của trình duyệt.
   - Chọn **"Tạo tệp lệnh mới..."**.

2. **Chỉnh sửa Script**:
   - Xóa nội dung mặc định trong cửa sổ trình soạn thảo.
   - Copy toàn bộ Script bên dưới
  
   Script:
   ```javascript
  	// ==UserScript==
  	// @name         Restore Text Selection
  	// @namespace    https://theloi.io.vn/
  	// @version      1.1
  	// @description  Khôi phục chức năng bôi đen, chuột phải, sao chép và DevTools bị chặn trên các trang web với menu tùy chỉnh
  	// @author       Lợi Nguyễn
  	// @copyright    © 2025 Lợi Nguyễn. All rights reserved. Do not modify or remove author information.
  	// @match        *://*/*
  	// @grant        GM_setValue
  	// @grant        GM_getValue
  	// @grant        GM_registerMenuCommand
  	// @require      https://raw.githubusercontent.com/lowji194/Tampermonkey/refs/heads/main/scripts/Restore-Right-Click-Menu-and-Copy.js
  	// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js
  	// @resource     sweetalert2_css https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css
  	// @updateURL    https://raw.githubusercontent.com/lowji194/Tampermonkey/refs/heads/main/scripts/Restore-Right-Click-Menu-and-Copy.js
  	// @downloadURL  https://raw.githubusercontent.com/lowji194/Tampermonkey/refs/heads/main/scripts/Restore-Right-Click-Menu-and-Copy.js
  	// ==/UserScript==
   ```
3. **Nhập Script**:
   - Dán mã script vào, bạn nhấn **File > Save** hoặc nhấn **Ctrl + S** để lưu.
   - Nhấp biểu tượng Tampermonkey và kích hoạt Script vừa cài đặt
