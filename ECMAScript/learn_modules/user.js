// có thể export ngay tại dòng đó, hoặc export chung
// như dòng số 8
export let userName = 'javascript'
let fullName = 'Nguyen The Manh'
const mangSo = [1, 2, 3, 4]

// ta có thể đổi tên bất cứ thành phần nào bằng cách sử dụng: as
export { mangSo as numbers, fullName as nameManh }

export let sum = function sum(a, b) {
    console.log(a + b)
}

export default class person {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    info() {
        console.log(this.id + '-' + this.name)
    }
}