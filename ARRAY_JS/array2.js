// ARRAY PHẦN 2

/*  Array methods:
    1. forEach (duyệt qua từng phần tử của mảng)
    2. every   (tất cả các phần tử phải thỏa mãn 1 điều kiện nào đó, trả về kiểu boolean)
    3. some    (chỉ cần 1 trong những phần tử thỏa mãn điều kiện nào đó thì trả về true)
    4. find    (tìm kiếm 1 phần tử nào đó dựa vào các thành phần có trong mảng)
    5. filter  (giống như find nhưng trả về tất cả phần tử thỏa mãn, find chỉ trả về 1 phần tử)
    6. map     ()
    7. reduce  ()
    dịch nghĩa 1 số từ:
    each: mỗi; every: mọi; find: tìm thấy; filter: lọc; map:bản đồ; reduce: giảm
*/

let courses = [{
    id: 1,
    name: 'javascript',
    coin: 250
}, {
    id: 2,
    name: 'HTML, CSS',
    coin: 0
}, {
    id: 3,
    name: 'PHP',
    coin: 0
}, {
    id: 4,
    name: 'PHP',
    coin: 0
}]

// forEach()
courses.forEach(function(courses, index) {
    console.log(courses, index)
})

// tham số index trả về chỉ mục của các phần tử
// tham số courses trả về nội dung của các phần tử

// every()
// ví dụ: kiểm tra tất cả khóa học xem có phải trả phí k ?
// nếu coin === 0 => true, nếu coin != 0 => false
// trường hợp trên trả về false
// lặp qua các phần tử, nếu gặp phần tử không thỏa mãn đk thì dừng lại, nếu thỏa mãn điều kiện 
// thì lặp qua phần tử kế tiếp
var isFree = courses.every(function(courses) {
    return courses.coin === 0
})
console.log(isFree)

// some ()
// giống như ví dụ trên, nhưng chỉ cần 1 khóa học có coin === 0 => true
// lặp qua lần lượt qua các phần tử chỉ cần 1 phần tử thỏa mãn sẽ dừng lại
var isFree = courses.some(function(courses) {
    return courses.coin === 0
})
console.log(isFree)

// find ()
// tìm kiếm xem trong mảng có khóa học PHP nào không, dựa vào thuộc tính name
// lặp qua các phần tử để kiểm tra khi tìm thấy PHP thì dừng lại và gán vào biến course
// chỉ trả về 1 khóa học PHP
var course = courses.find(function(courses) {
    return courses.name === 'PHP'
})
console.log(course)

// filter ()
// tìm kiếm khóa học dựa vào name và trả về tất cả những khóa học có name là PHP
var course = courses.filter(function(courses) {
    return courses.name === 'PHP'
})
console.log(course)