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
        console.log(`hàm được chạy sau 0.1 giây`)
    }, 100)

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

// setTimeout(function() {
//     console.log(1)
//     setTimeout(function() {
//         console.log(2)
//         setTimeout(function() {
//             console.log(3)
//         }, 200)
//     }, 200)
// }, 200)

// lý thuyết, cách hoạt động của promise
// được tạo ra để sử lý bất đồng bộ, khi gặp phải callback hell, giúp code dễ đọc, dễ hiểu hơn
// bước 1: tạo new Promise
// bước 2: Excutor (thi hành)
let promise = new Promise(
    function(resolve, reject) {
        // logic
        // thành công: resolve()
        // thất bại: reject()
        resolve()
            // resolve()  trạng thái thành công, lọt vào then
            // reject()  trạng thái thất bại, lọt vào catch
            // filnally luôn được lọt vào dù resolve hay reject
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

/*
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
*/

// sử dụng promise để giải quyết callback hell
// then thứ nhất return về 1, then thứ 2 có tham số data nhận dữ liệu từ then 1 và in ra 
// giá trị 1, then thứ 3 có tham số data và in ra giá trị nhận từ then 2, then thứ 4 tương tự
/*
promise
    .then(function() {
        return 1
    })
    .then(function(data) {
        console.log(data)
        return 2
    })
    .then(function(data) {
        console.log(data)
        return 3
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function() {
        console.log('error !')
    })
    .finally(function() {
        console.log('done !')
    })
*/

// then thứ 2 phải chờ sau 3 giây mới nhận được dữ liệu từ then thứ nhất
// ta có thể return được 1 promise trong hàm, tương tự như tạo bên ngoài.
// promise trong hàm có tính chất tương tự -> promise lồng nhau
// promise
//     .then(function() {
//         return new Promise(function(resolve) {
//             setTimeout(function() {
//                 resolve([1, 2, 3])
//             }, 3000)
//         })
//     })
//     .then(function(data) {
//         console.log(data)
//     })
//     .catch(function() {
//         console.log('error !')
//     })
//     .finally(function() {
//         console.log('done !')
//     })


// ví dụ giải quyết callback hell sau 1 khoảng thời gian
// ms là mili giây
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms) // trả về resolve sau 1 khoảng thời gian
    })
}

// nghỉ 1 giây, 1000 là đối số truyền vào tham số ms của sleep, sau đó return
// vào setTimeout 1000 ms giây
sleep(1000)
    .then(function() {
        console.log(1)
        return sleep(1000)
    }) // then thứ 2 phải đợi sau 1 giây, các then sau tương tự vì return về sleep(1000)
    .then(function() {
        console.log(2)
        return new Promise(function(resolve, reject) {
                reject('có lỗi !') // then thứ 2 return về 1 new Promise
            }) // và trả về reject() là có lỗi tại đây, nên được bắt vào catch
    })
    .then(function() {
        console.log(3)
        return sleep(1000)
    })
    .catch(function(err) {
        console.log(err)
    })

// 1. promise.resolve
// 2. Promise.reject
// 3. promise.all

// chỉ lọt vào then vì sử dụng Promise.resolve
// chỉ lọt vào catch nếu return về 1 new promise có reject
let promise2 = Promise.resolve('Sucsses !')

promise2
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })

// chỉ lọt vào catch vì sử dụng Promise.reject
let promise3 = Promise.reject('error !')

promise3
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })

let promise4 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([1])
    })
}, 1000)

let promise5 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([2, 3])
    })
}, 1200)

// chạy song song promise 4 và 5, có thể sử dụng dữ liệu của nhau
// thực hiện song song giúp chạy nhanh hơn
Promise.all([promise4, promise5])
    .then(function(result) {
        let result1 = result[0]
        let result2 = result[1]
            // nối phần tử mảng của promise4 vs promise5
        console.log(result1.concat(result2))
    })