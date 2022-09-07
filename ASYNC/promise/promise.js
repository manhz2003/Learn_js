// ĐỒNG BỘ VÀ BẤT ĐỒNG BỘ
// Khái niệm: đồng bộ và bất đồng bộ (sync, async)
// đồng bộ(sync): là chạy lần lượt từ trên xuống dưới
// bất đồng bộ (async): là chạy theo 1 khoảng thời gian được quy định riêng
// các api được sử dụng để hoạt động bất đồng bộ: setTimeout, setInterval, fetch, XMLHttpRequest...

// ví dụ về đồng bộ
function sync(num, string, boolean) {
    console.log(`Giá trị của number = ${num}`) // thứ tự 1
    console.log(`Giá trị của string = ${string}`) // thứ tự 2
    console.log(`Giá trị của boolean = ${boolean}`) // thứ tự 3
}

sync(2003, 'string', true)

// ví dụ về bất đồng bộ
// hàm first được đặt 1 khoảng thời gian là 2 giây nên sẽ chạy sau hàm last
function async() {
    setTimeout(function first() {
        console.log(`hàm được chạy sau 0.5 giây`)
    }, 500)

    function last() {
        console.log(`hàm này sẽ được chạy trước `)
    }
    last()
}
// hàm async hoạt động không tuần tự => bất đồng bộ
async()

// PROMISE
// callback hell
// là nỗi đau, bế tắc khi viết code, khi việc sau phải nhận được dữ liệu
// của việc trước thì mới được chạy, các việc cứ nối tiếp nhau, bị phụ thuộc
// nên mới sinh ra promise
setTimeout(function() {
    console.log(1)
    setTimeout(function() {
        console.log(2)
        setTimeout(function() {
            console.log(3)
        }, 1000)
    }, 1000)
}, 1000)

// lý thuyết, cách hoạt động của promise
// được tạo ra để sử lý bất đồng bộ, khi gặp phải callback hell, giúp code dễ đọc, dễ hiểu hơn
// bước 1: tạo new Promise
// bước 2: Excutor (thi hành)
let promise = new Promise(
    function(resolve, reject) {
        // logic
        // thành công: resolve()
        // thất bại: reject()
        resolve() // filnally luôn được lọt vào dù resolve hay reject
            // resolve()  trạng thái thành công, lọt vào then
            // reject()  trạng thái thất bại, lọt vào catch

    }
)

// promise là: lời hứa
// then là: sau đó
// catch là: bắt lấy
// finally là: hoàn thành
/* logic: promise sinh ra để giải quyết 1 vấn đề nào đó, then là nếu lời hứa
    được chấp thuận thì lọt vào then()
    khi bị từ chối thì lọt vào catch()
    sau khi hoàn thành, không cần biết đúng hay sai thì đều lọt vào finally()
*/

// có 3 trạng thái
// 1. Pending (trạng thái chờ), là khi chưa gọi resolve hoặc reject như dòng 55
// 2. successully (trạng thái thành công)
// 3. fall (trạng thái thất bại)

promise
    .then(function() {
        console.log('successully !')
    })
    .catch(function() {
        console.log('fall !')
    })
    .finally(function() {
        console.log('done !')
    })