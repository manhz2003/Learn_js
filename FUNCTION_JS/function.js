// FUNCTION JS

/* 1. Hàm ?
    - Một khối mã
    - Làm 1 việc cụ thể

   2. Loại hàm
    - Built-in
    - Tự định nghĩa

   3. Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi định nghĩa
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị

   4. Tham số
    - có thể truyền 1 hoặc nhiều tham số
    - kiểu dữ liệu: tất cả kiểu dữ liệu truyền vào đều hợp lệ
 */

// hàm không truyền tham số
function testFn() {
    console.log(`kiểm tra hàm không truyền tham số`)
}

testFn()

// hàm truyền tham số, tham số a
function myFunction(a) {
    if (a >= 18) {
        alert(`bạn đủ tuổi xem phim java`)
    } else {
        alert(`next đi nhóc, trẻ con`)
    }
}

myFunction(18) // 18 là giá trị đối số a

// hàm sử dụng return
// có 2 tác dụng chính
// 1. biến hàm thành 1 giá trị, có thể dùng hàm để tính toán, hoặc làm các công việc khác.
// 2. hàm return tại đâu sẽ dừng lại tại đó, cho dù đằng sau có thực hiện công việc gì
function sum(x, y) {
    return x + y // hàm dừng lại tại đây
    x - y // không được thực hiện vì bên trên đã return
}

console.log(sum(2, 3)); // vì sử dụng return hàm đã trở thành 1 giá trị nên phải console.log
// nó ra

// hàm sum được return nên trở thành 1 giá trị, dùng sum để tính toán tiếp trong hàm khác
function sum2(z) {
    return sum(2, 3) + z
}

console.log(sum2(10));