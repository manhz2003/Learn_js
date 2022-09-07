// CALLBACK
// Khái niệm: Là hàm được truyền qua đối số khi gọi 1 hàm khác
// javascript hoạt động theo kiểu đồng bộ và bất đồng bộ

// Ví dụ về js đồng bộ (chạy lần lượt từ trên xuống dưới, từ trái sang phải)

function myFunction(param) { // tham số param là myCallback vì myCallback được gọi trong myFunction
    param(`học lập trình`)
}

function myCallback(value) {
    console.log(`value: ${value}`)
}

// Hàm myCallback là đối số của hàm myFunction
// Khi gọi myCallback làm đối số của myFunction thì tham số param trong myFunction chính là hàm Mycallback
myFunction(myCallback)

// Empty element of array (phần tử trống rỗng của mảng, bổ sung kiến thức về array)
// định nghĩa cho mảng có độ dài là 10
// chỉ có 3 phần tử trong mảng là giá trị thật, 7 phần tử còn lại là giá trị rỗng
// trong trường hợp này khi lặp qua mảng vòng lặp for thông thường sẽ lặp 10 lần
let names = ['manh', 'dung', 'nam']
names.length = 10

// sử dụng for in để chỉ lặp qua các phần tử có thật trong mảng
for (test in names) {
    console.log(test)
}

// CALLBACK PHẦN 2
// hiểu hơn về callback bằng cách hiểu hoạt động bên trong của phương thức:
// map, forEach, find, filter, some, every, reduce
// tạo ra method map2() hoạt động tương tự map()

// map2()
Array.prototype.map2 = function(callback) {
    let output = [],
        arrayLangth = this.length
    for (i = 0; i < arrayLangth; i++) {
        let result = callback(this[i], i)
        output.push(result)
    }
    return output
}

let courses = ['javascript', 'php', 'ruby']

let htmls = courses.map2(function(course, index) {
    return `<h2>${course}</h2>`
})

console.log(htmls.join(''))

// forEach2()
Array.prototype.forEach2 = function(callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this)
        }
    }
}

console.log(courses)
courses.push('node js', 'java')

courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
})