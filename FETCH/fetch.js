// Fetch in js (dùng fetch để lấy ra json)
// Api (URL) -> cổng giao tiếp giữa các phần mềm
// Backend -> API -> Fetch -> Json /xml
// json.parse -> javascript types
// -> render ra giao diện với HTML

// link 1 số api được viết mẫu trên google https://jsonplaceholder.typicode.com/

let postApi = 'https://jsonplaceholder.typicode.com/albums'
fetch(postApi) // bên trong fetch sử dụng promise nên có thể sử dụng then
        // then thứ 1 để chuyển đổi
    .then(function(response){ // response: phản hổi
        return response.json()
        // JSON.parse: JSON -> javascript types
    })
    // then thứ 2 dùng để hiển thị
    .then(function(posts){
        let htmls = posts.map(function(post){
            return `<li>
                <h1>${post.id}</h1>
                <p>${post.title}</p>
            </li>`
        })
        let html = htmls.join('')
        document.getElementById('post-block').innerHTML = html
    })
    // nếu api bị lỗi thì lọt vào catch
    .catch(function(err){
        console.log(err);
    })
