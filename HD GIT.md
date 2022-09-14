HƯỚNG DẪN SỬ DỤNG GIT
Cách đẩy code từ máy lên git (tạo mới)
1. tạo mới Repositories trên trang github.com
2. tạo thư mục cần khởi tạo project, các file tương ứng
3. bật terminal lên gõ lệnh: git init (khởi tạo)
4. gõ lệnh: git add . (để thêm toàn bộ các file vào thùng chứa)
5. gõ lệnh: git status (để kiểm tra trạng thái các file ở thùng chứa)
6. gõ lệnh: git remote add origin <đường link git> (tạo địa chỉ kết nối github với project)
<!-- bước 6 chỉ cần thêm lệnh này mỗi khi tạo project mới lần đầu -->
7. gõ lệnh git push origin <tên nhánh> (đẩy code lên sever github, có thể viết tắt là git push)

cách kéo code từ sever github về máy
1. chọn và tạo vị trí cần clone project về máy
2. gõ lệnh: git clone <đường link git> (clone 1 project từ github về máy)
3. gõ lệnh: git bull (để kéo những thay đổi đoạn code của người khác trên git về máy)
4. thao tác đẩy code lên git từ máy khác lên tương tự như cách trên

<!-- có thể đẩy code lên từ nhiều nhánh, và có 1 nhánh chính, sau khi đc kiểm duyệt code của
các thành viên trong team sẽ được thêm từ các nhánh khác vào nhánh chính, thường là main hoặc master
 -->

<!-- nhánh -->
 cách tạo nhánh mới: git branch <tên nhánh>
 cách chuyển nhánh: git checkout <tên nhánh>
 vừa tạo mới vừa chuyển nhánh: git checkout -b <tên nhánh>

 <!-- 1 số lưu ý với git
    sau khi clone git về 1 máy khác, cần cd đúng vào thư mục chứa bên trong porject
    nếu không sẽ bị lỗi
    * lệnh cd dùng để dịch chuyển tới thư mục cần làm việc
  -->


