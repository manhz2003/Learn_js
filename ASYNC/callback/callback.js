// CALLBACK
// Khái niệm: Là hàm được truyền qua đối số khi gọi 1 hàm khác
// javascript hoạt động theo kiểu đồng bộ và bất đồng bộ

// Ví dụ về js đồng bộ (chạy lần lượt từ trên xuống dưới, từ trái sang phải)

myFunction = (param) => { // tham số param là myCallback vì myCallback được gọi trong myFunction
    param(`học lập trình`)
}

myCallback = (value) => {
    console.log(`value: ${value}`)
}

// Hàm myCallback là đối số của hàm myFunction
// Khi gọi myCallback làm đối số của myFunction thì tham số param trong myFunction chính là hàm Mycallback
myFunction(myCallback)


// CALLBACK PHẦN 2
// hiểu hơn về callback bằng cách hiểu hoạt động bên trong của phương thức:
// map, forrEach, find, filter, some, every, reduce

Array.prototype.map2 = function(callBack) {
    let output = [],
        arrayLength = this.length
    for (i = 0; i < arrayLength; i++) {
        let result = callBack(this[i], i)
        output.push(result)

    }
}

let courses = ['javascript', 'php', 'ruby']

let htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>`
})

console.log(htmls.join(''))