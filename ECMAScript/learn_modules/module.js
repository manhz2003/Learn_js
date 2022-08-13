// MODULES
// Bóc tách các vấn đề, tách riêng các chức năng thành nhiều modules
// dễ tìm code vào bảo trì, nâng cấp
// 1. import (nhập vào)
// 2. export (xuất ra)
// B1*: đầu tiên cần thêm thuộc tính: type ="module" , vào thẻ script bên file html
// B2: sử dụng từ khóa: import userName from './file cần import.js' để import vào file
// cần dùng, phần name có thể đặt tên cần import vd như tên của hàm là sum
// B3: sử dụng từ khóa: export default person , (cần phải export ở file user thì file module mới import được)

// truyền lần lượt các phần tử đc export và gọi ra sử dụng
import { userName, numbers, sum } from "./user.js";
console.log(userName)
console.log(numbers)


// import tất cả những gì có trong file user 
// có thể import riêng lẻ hoặc import tất cả, tùy trường hợp
import * as user from './user.js'

// khi import tất cả gọi ra bằng cách (user.tên cần dùng)
console.log(user.nameManh)
console.log(user.numbers)

// export default, không cần phải đưa vào ngoặc nhọn
// trong 1 file chỉ được sử dụng default 1 lần duy nhất
import person from "./user.js";
console.log(person)
sum(2, 3)