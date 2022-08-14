// CALLBACK
// Khái niệm: Là hàm được truyền qua đối số của hàm khác
// javascript hoạt động theo kiểu đồng bộ và bất đồng bộ

// Ví dụ về js đồng bộ (chạy lần lượt từ trên xuống dưới, từ trái sang phải)

myFunction = (param) => {
    param(`học lập trình`)
}

myCallback = (value) => {
    console.log(`value: ${value}`)
}

// myCallback(`Học lập trình`) , thay vì gọi trực tiếp hàm myCallback thì gọi nó trong hàm khác

// myCallback là hàm làm đối số của hàm myFunction
// xem lại bài callback trên f8, và xem lại bình luận của bạn tran luan trong hỏi đáp
myFunction(myCallback)