// CALL BACK
// Khái niệm: Gọi hàm trong 1 hàm khác. là một hàm sẽ được thực hiện sau khi một hàm khác 
// đã thực hiện xong. truyền hàm là tham chiếu vào đối số của 1 hàm
// ví dụ: 1 hàm cần chạy sau 1 khoảng thời gian để các hàm khác chạy trước thì cho làm đó tạm dừng
// bằng setTimeout(). Gọi là bất đồng bộ

// Ví dụ về js đồng bộ (chạy lần lượt)

fnDad = () => {
    console('Đây là hàm cha !')
}

fnChild = () => {

}