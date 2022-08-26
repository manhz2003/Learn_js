// ARRAY JS
// cú pháp tạo 1 mảng
// có thể đưa vào trong mảng chuỗi, số, kiểu dữ liệu ...
let arrName = [
    'Mạnh Nguyễn',
    'Hải Nguyễn',
    15,
    10,
    null,
    undefined,
    {},
    function() {}
]
console.log(arrName) // kiểm tra mảng
console.log(arrName.length) // kiểm tra dộ dài mảng
console.log(arrName[2]) // lấy ra phần tử mảng theo vị trí index, bắt đầu từ 0

/* CÁC METHOD LÀM VIỆC VỚI ARRAY
 1. to string()   (chuyển từ array sang string)
 2. join()        (chuyển từ array sang string, ngăn cách các phần tử bằng các dấu : - , ...)
 3. pop()         (xóa đi phần tử cuối mảng và trả về phần tử đó)
 4. push()        (thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới)
 5. shift()       (xóa đi phần tử đầu mảng, và trả về phần tử đó)
 6. unshift()     (thêm 1 hoặc nhiều phần tử vào đầu mảng, và trả về độ dài)
 7. splice()      (xóa hoặc chèn phần tử dựa vào index của phần tử đó)
 8. concat()      (nối 2 mảng lại với nhau)
 9. slice()       (cắt 1 vài phần tử của mảng hoặc cắt toàn bộ)
 */

let langueages = ['Javascript', 'PHP', 'Ruby']

console.log(langueages.toLocaleString())

console.log(langueages.join(' - '))

console.log(langueages.pop())

console.log(langueages.push('C++', 'Dart'))
console.log(langueages) // kiểm tra các phần tử mới được thêm cuối mảng

console.log(langueages.shift())

console.log(langueages.unshift('dot', 'react'))
console.log(langueages) // kiểm tra các phần tử mới được thêm đầu mảng

langueages.splice(1, 2, 'dart') // 1, 2 là vị trí bắt đầu và kết thúc của phần tử cần xóa
    // hoặc chèn, 'dart' là tên phần tử được chèn vào
console.log(langueages)

let langueages2 = ['vue', 'react js']
console.log(langueages.concat(langueages2)) // nối mảng languages2 vào languages, có thể nối ngược lại

console.log(langueages.slice(1)) // cắt toàn bộ mảng
console.log(langueages.slice(0, 1)) // cắt theo vị trí index mảng