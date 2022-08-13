CÁCH ĐẨY CODE LÊN GITHUB
Bước 1: khởi tạo: git init
Bước 2: thêm file  + git add -A (thêm toàn bộ file, mọi thay đổi, thêm sửa xóa lên git)
                   + git add -u (chỉ thêm các file được thay đổi lên git)
                   + git add . (thêm 1 file vừa được tạo mới lên git)
                   + git add . tên file (chỉ thêm file cần thêm lên git)
Bước 3: kiểm tra: git status (kiểm tra các file đã được thêm hay chưa)
Bước 4: git commit -m 'viết gì ở đây cũng được'
Bước 4: git remote rm origin (nếu báo lỗi đăng nhập thì thêm dòng này, k thì thôi)
Bước 5: git remote add origin https://github.com/manhz2003/Learn_js.git
(đường dẫn lấy ở thư mục git tạo trên git trình duyệt, đường dẫn trên chỉ là ví dụ)
Bước 6: git push -u origin master (push code lên git trình duyệt)

// Lưu ý: mỗi lần add code nên dùng git status để kiểm tra, khi add sử dụng 1 trong các
// dấu + trên tùy trường hợp

CÁCH LẤY CODE VỀ TRÊN GITHUB VỀ MÁY

