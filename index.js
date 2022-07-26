const form = document.getElementById('new-post')
const titleInput = document.getElementById('post-title')
const bodyInput = document.getElementById('post-body')
let postArray = [] 

function renderPosts(){
    let html = ""
        for (post of postArray){
            html+=`
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `
        document.getElementById('blog-list').innerHTML = html
    }
}

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(data => {
    postArray = data.slice(0, 4)
    renderPosts()
  })

form.addEventListener('submit', function(e){
    e.preventDefault()
    titleInput;
    bodyInput;
    const data = {
        title: titleInput.value,
        body: bodyInput.value
    }


    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers : {
            "Content-Type" : 'application/json'
        }
    }
    fetch('https://jsonplaceholder.typicode.com/posts/', options)
        .then(res => res.json())
        .then(data => {
           postArray.unshift(data)
           renderPosts()
           titleInput.value = ""
           bodyInput.value = ""
        })

})
