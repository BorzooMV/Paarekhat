const latestPost = document.getElementById('latestPosts');

window.addEventListener('load',loadPosts);

function loadPosts(){
    latestPost.innerHTML = '';
    fetch('../data/posts.json')
        .then(res => res.json())
        .then(postList => {
            if(postList.length < 4){
                postList.forEach(post=>{
                    latestPost.innerHTML += `<div class="post">
                    <img src="${post.thumbnail.src}" alt="${post.thumbnail.alt}">
                    <h1>${post.title}</h1>
                    <p>
                        ${post.description}
                    </p>
                    <div class="postFoot">
                        <span class="postAuthor">written by <em>${post.author}</em></span>
                        <span class="postDate">date : <time datetime="2020-09-22">${post.date}</time></span>
                    </div>
                </div>`
                })
            }else{
                for(let i = postList.length - 1; i > postList.length - 4; i--){
                    latestPost.innerHTML += `<div class="post">
                    <img src="${postList[i].thumbnail.src}" alt="${postList[i].thumbnail.alt}">
                    <h1>${postList[i].title}</h1>
                    <p>
                        ${postList[i].description}
                    </p>
                    <div class="postFoot">
                        <span class="postAuthor">written by <em>${postList[i].author}</em></span>
                        <span class="postDate">date : <time datetime="2020-09-22">${postList[i].date}</time></span>
                    </div>
                </div>`
                }
            }
        })
}