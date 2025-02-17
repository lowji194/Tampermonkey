# Hướng dẫn cài đặt và sử dụng Tampermonkey Script từ GitHub

## Giới thiệu

Đây là hướng dẫn cách thêm và sử dụng một script Tampermonkey từ một liên kết GitHub. Script này khôi phục chức năng chuột phải và sao chép bị chặn trên các trang web.

## Bước 1: Cài đặt Tampermonkey

Nếu bạn chưa cài đặt **Tampermonkey**, làm theo các bước sau:

- **Google Chrome**: Truy cập [Chrome Web Store - Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey) và nhấn **Add to Chrome**.
- **Firefox**: Truy cập [Mozilla Add-ons - Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) và nhấn **Add to Firefox**.
- **Microsoft Edge**: Truy cập [Microsoft Edge Add-ons - Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey) và nhấn **Get**.

## Bước 2: Tạo một Script mới trong Tampermonkey

1. **Mở Tampermonkey**:
   - Nhấp vào biểu tượng Tampermonkey trên thanh công cụ của trình duyệt.
   - Chọn **"Create a new script..."**.

2. **Chỉnh sửa Script**:
   - Xóa nội dung mặc định trong cửa sổ trình soạn thảo.
   - Sao chép Link Raw của Script trên Github ví dụ: https://raw.githubusercontent.com/lowji194/Tampermonkey/refs/heads/main/Restore-Right-Click-Menu-and-Copy.js
   - Chỉnh sửa script của bạn như sau:
  
   Ví dụ mã nguồn:
   ```javascript
   // ==UserScript==
   // @name         Tên của Script đặt tùy ý
   // @namespace    https://github.com/lowji194
   // @version      0.1
   // @description  Mổ tả chức năng của Script
   // @author       You
   // @match        *://*/*
   // @require      Dán link Script vào đây
   // ==/UserScript==


### Giải thích chi tiết về các trường trong script:

- **`@require`**: Đây là trường quan trọng để bạn thêm link Raw của script vào. Tampermonkey sẽ tự động tải script từ URL đó khi trang web được tải.
- **`@match`**: Trường này xác định các trang web mà script sẽ áp dụng. `*://*/*` có nghĩa là script sẽ chạy trên mọi trang web, nhưng bạn có thể thay đổi nếu muốn giới hạn nó chỉ hoạt động trên một số trang web cụ thể.

Hãy thử các bước trên và nếu gặp khó khăn nào, đừng ngần ngại yêu cầu thêm sự hỗ trợ nhé!
