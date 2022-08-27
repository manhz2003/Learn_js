// ARRAY PHẦN 2

/*  Array methods:
    1. forEach (dùng để duyệt qua từng phần tử của mảng)
    2. every   (duyệt qua từng phần tử, kiểm tra điều kiện, trả về kiểu boolean)
    3. some    ()
    4. find    ()
    5. filter  ()
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
}]

// forEach()
courses.forEach(function(courses, index) {
    console.log(courses, index)
})

// tham số index trả về chỉ mục của các phần tử
// tham số courses trả về nội dung của các phần tử

// every()
courses.forEach(function(courses, index) {
    console.log(courses, index)
})