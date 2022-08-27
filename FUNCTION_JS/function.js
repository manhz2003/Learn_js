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