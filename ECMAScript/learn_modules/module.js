// MODULES
/* Lý thuyết
- Các mô-đun JavaScript cho phép bạn chia nhỏ mã của mình thành các tệp riêng biệt.
- Điều này làm cho việc duy trì cơ sở mã dễ dàng hơn.
- Các mô-đun JavaScript dựa vào các câu lệnh import và export.
 */

/*
+ export: dữ liệu được xuất đi
+ import: dữ liệu được nhập vào
 */

/* exprot
- Bạn có thể exprot một function hoặc 1 variable từ bất kỳ tệp nào.
- Có hai loại exprot: Được đặt tên và Mặc định.
*/



/* import
+ có thể import các mô-đun vào một tệp theo hai cách, dựa trên việc chúng được đặt là export hay export default.
+ export được đặt tên được tạo bằng cách sử dụng ngoặc nhọn. export default thì không.
 */

import test from "./test.js";
console.log(test)