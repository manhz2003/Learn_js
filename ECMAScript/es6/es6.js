// CÁC KIẾN THỨC CẦN NHỚ TRONG JAVASCRIPT ES6
// 1. khai báo biến: var, let, const
// 2. biểu diễn chuỗi: template string
// 3. arrow function
// 4. Classes
// 5. 

// 1. KHAI BÁO BIẾN (var, let, const)
// khai báo biến x = 10 bằng từ khóa var, phạm vi hoạt động toàn cục
// có thể sử dụng và gọi ra ở bất cứ đâu
var x = 10;

// có thể gán lại cho biến 1 giá trị khác
x = 11;

// khai báo biến cục bộ, phạm vi hoạt động chỉ sử dụng trong 1 khối code
// có thể gán lại cho y bằng 1 giá trị khác
let y = 11;

// khai báo 1 biến hằng số, phạm vi hoạt động: trong 1 khối code
// không thể gán 1 giá trị khác cho biến z, sử dụng const khi biến đó không cần gán lại
const z = 12;

/***************************************************** */

// 2. BIỂU DIỄN CHUỖI (template string)
// giúp biểu diễn chuỗi 1 cách nhanh gọn và đơn giản hơn

let x1 = 20
let x2 = 21

// * CÁCH BIỂU DIỄN CHUỖI THÔNG THƯỜNG
// phải nhóm các phép tính trong ngoặc tròn
// khi xuống dòng phải dùng \n
// khi cộng chuỗi phải nối bằng nhiều dấu +
console.log('kết quả của x1 + x2 = ' + (x1 + x2) + '\n' + 'kết quả của x2 - x1 = ' + (x2 - x1))

// * CÁCH BIỂU DIỄN CHUỖI TEMPLATE STRING (ngắn gọn và dễ dàng hơn)
// nội dung được viết hết trong dấu ` `
// khi nối chuỗi và cac biến không cần sử dụng dấu +
// khi sử dụng biến đặt nó trong ${}
console.log(`kết quả của x1 + x2 = ${x1 + x2} 
kết quả của x1 - x2 = ${x2 - x1}`)

/***************************************************** */

// 3. ARROW FUNCTION
// chức năng tương tự như 1 function bình thường nhưng được viết ngắn gọn hơn và có dạng mũi tên

// function thường
function sum(a, b) {
    return a + b
}
console.log(sum(2, 3))

// arrow function
// bỏ đi từ khóa function và thêm mũi tên
// nếu không có cặp ngoặc nhọn có thể thực hiện luôn phép tính x + y mà không cần return
sum2 = (x, y) => x + y
console.log(sum2(3, 3))

/***************************************************** */

// 4. CLASS
// Là định nghĩa giống hướng đối tượng, object contructor
// xây dựng nên các đối tượng để các thành phần khác có thể kế thừa lại

// khởi tạo các thuộc tính
class course {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}
// khởi tạo các các đối tượng và kế thừa thuộc tính bên trên
let nodejsCourse = new course('node js', 1000)
let jsCource = new course('javascript', 1200)

// title và year là 2 thuộc tính riêng của nodejsCourse và jsCource, nên không tạo
// ở class bên trên
nodejsCourse.title = 'ngôn ngữ lập trình javascript'
jsCource.year = 2009

console.log(nodejsCourse)
console.log(jsCource)

/***************************************************** */

// DESTRUCTURING VÀ REST
// dùng để lấy ra các phần tử trong array hoặc object để gán vào các biến

// *VỚI ARRAY
// DESTRUCTURING
let array = ['Javascript', 'php', 'ruby', 'node js']
    // giá trị của mảng đc lưu vào các biến abcd
let [a, b, c, d] = array;
console.log(a, b, c, d)
    // phần tử nào k lấy ta có thể bỏ trống sau dấu phẩy
let [m, , , k, l] = array
console.log(m, k)

// REST (sau khi lấy các giá trị của mảng lưu vào các biến thì các biến chưa đc lưu đc gọi là rest)
// sử dụng dấu ...rest để lấy nốt ra các phần tử còn lại
// rest chỉ là tên biến ra người dùng đặt ra, có thể sử dụng từ khác
let array2 = ['manh', 'son', 'tu', 'tuan', 'dat']
let [q, w, ...rest] = array2
console.log(q, w, rest)

// *VỚI OBJECT
// DESTRUCTURING
let person = {
    lastName: 'Manh',
    firstName: 'Nguyen The',
    age: 19,
    address: 'Ha Noi'
}

let { lastName, firstName, age, address } = person
console.log(lastName, firstName, age, address)