// ví dụ về promise
// hiển thị comment người dùng

let users = [{
        id: 1,
        name: 'manh nguyen',
    },
    {
        id: 2,
        name: 'nam nguyen',
    },
    {
        id: 3,
        name: 'thao nguyen',
    }
]

let comments = [{
        id: 1,
        user_id: 1,
        content: 'xin chao',
    },
    {
        id: 2,
        user_id: 2,
        content: 'hello world',
    }
]

// 1. lấy comment
// 2. từ comment lấy ra user_id
// 3. từ user_id lấy ra user tương ứng

// fake api

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000)
    })
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id)
        })
        setTimeout(function() {
            resolve(result)
        }, 1000)
    })
}

getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id
        })
        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments,
                }
            })
    })
    .then(function(data) {
        var commentBlock = document.getElementById('comment-block')
        var html = ''
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        commentBlock.innerHTML = html
    })