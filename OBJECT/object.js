// OBJECT JS
// Lưu trữ thông tin của 1 đối tượng cụ thể
//  gồm key và value: ví dụ key name có value là 'Mạnh Nguyễn'

let myInfo = {
        name: 'Mạnh',
        age: 19,
        address: 'Hà Nội',
        getName: function() {
            return this.name
        },
        firstName: 'nguyen'
    }
    // có thể đặt function làm value trong object
    // từ khóa this thay cho myInfo
    // thêm 1 key và value vào myInfo
delete myInfo.firstName // xóa phần tử trong object
myInfo.email = 'manhthenguyen113@gmail.com'
console.log(myInfo)
console.log(myInfo.name)

// object contructor
function User(firstName, lastName, id) {
    this.firstName = firstName
    this.lastName = lastName
    this.id = id
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

// kế thừa lại các thuộc tính chung từ object contructor
let person = new User('manh', 'nguyen', 1)
let person2 = new User('tung', 'nguyen', 2)

// thêm các thuộc tính riêng cho từng đối tượng
person.title = 'học lập trình'
person.phoneNumber = 0987739823

console.log(person)
console.log(person2)

// this.getName là phương thức được tạo trong object
console.log(person.getName())
console.log(person2.getName())

// object prototype (thêm các thuộc tính và phương thức từ bên ngoài hàm contructor)
// thêm thuộc tính và phương thức từ bên ngoài bằng prototype
User.prototype.className = 'IT3'
User.prototype.getClassName = function() {
    return this.className
}

console.log(person.className)
console.log(person2.getClassName())

// đối tượng date

let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let hours = date.getHours()
let min = date.getMinutes()
let second = date.getSeconds()
console.log(date)
console.log(`ngày ${day} tháng ${month} năm ${year}`)
console.log(`giờ ${hours} phút ${min} giây ${second}`)

// đối tượng math

/*  1 số hàm math
    - Math.PI       (trả về số pi)
    - Math.round()  (làm tròn số thập phân)
    - Math.abs      (giá trị tuyệt đối)
    - Math.ceil()   (chỉ làm tròn trên)
    - Math.floor()  (chỉ làm tròn dưới)
    - Math.random() (tạo 1 dãy số thập phân ngẫu nhiên nhỏ hơn 1)
    - Math.min()    (lấy ra số nhỏ nhất)
    - Math.max()    (lấy ra số lớn nhất)
    .....
*/

console.log(Math.PI)
console.log(Math.round(1.5))
console.log(Math.min(32, 5, 100, 10, 40))
console.log(Math.max(1.5, 5.6, 30, 70, 55))