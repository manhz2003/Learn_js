// Khái niệm JSON: là 1 định dạng dữ liệu dạng chuỗi, không phải kiểu dữ liệu
// dùng để giao tiếp dữ liệu giữa các ngôn ngữ lập trình với nhau theo một quy chuẩn chung
// chuyển đổi các kiểu dữ liệu sang json và chuyển từ json sang các kiểu dữ liệu
// number, string, object, null, bolearn, array

// biểu diễn json sử dụng dấu ' '
let json = '6' // json dạng number
let json1 = '"a"' // json dạng chuỗi
let json2 = '["javascript", "php", "ruby"]' // json dạng array
let json3 = '{"name":"Manh","age":19,"address":"ha noi"}' // json dạng object
let json4 = 'true' // json dạng bolearn
let json5 = 'null' // json dạng null

// parse: từ JSON -> javascript
console.log(JSON.parse(json))
console.log(JSON.parse(json1))
console.log(JSON.parse(json2))
console.log(JSON.parse(json3))
console.log(JSON.parse(json4))
console.log(JSON.parse(json5))

// Stringify: chuyển từ javascript sang json
console.log(JSON.stringify(123))
console.log(JSON.stringify('hello'))

console.log(JSON.stringify([
    'javascript',
    'PHP',
    'ruby',
    'node js'
]))

console.log(JSON.stringify({
    name: 'Manh',
    age: 19,
    address: 'Ha Noi'
}))