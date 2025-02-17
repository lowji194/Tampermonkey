# Hướng dẫn cài đặt và sử dụng Tampermonkey Script từ GitHub

## Giới thiệu

Đây là hướng dẫn cách thêm và sử dụng một script Tampermonkey từ một liên kết GitHub. Script này khôi phục chức năng chuột phải và sao chép bị chặn trên các trang web.

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
   - Sao chép Link Raw của Script trên Github ví dụ: https://raw.githubusercontent.com/lowji194/Tampermonkey/refs/heads/main/Restore-Right-Click-Menu-and-Copy.js
   - Chỉnh sửa script theo mãu bên dưới:
  
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
   
3. **Nhập Script**:
   - Dán mã script vào, bạn nhấn File > Save hoặc nhấn Ctrl + S để lưu.
   - Nhấp biểu tượng Tampermonkey và kích hoạt Script vừa cài đặt

### Giải thích chi tiết về các trường trong script:

- **`@require`**: Đây là trường quan trọng để bạn thêm link Raw của script vào. Tampermonkey sẽ tự động tải script từ URL đó khi trang web được tải.
- **Link Raw**: Đảm bảo rằng bạn đã lấy chính xác link **Raw** của file script từ GitHub (trang GitHub có thể cung cấp một tùy chọn "Raw" khi bạn nhấn vào file).
