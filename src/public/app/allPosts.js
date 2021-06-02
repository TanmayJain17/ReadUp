function getAllPosts(){
    $.get('/api/posts',(posts)=>{
        for (let p of posts){
            let body = p.body
            console.log(typeof(body))
            let newBody = body.slice(0,200)
            
            $('#allPosts').append(`
            <div id="cards" class="card col-3 mx-2 my-3 border-primary " style="width: 18rem;">
            <div class="card-body">
                <h5 id="title" class="card-title">${p.title}e</h5>
                <h6 id="authorname" class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                <p id="postBody" class="card-text">${newBody}<a class="readMoreLinks" id="${p.id}" href="../components/readMore.html?${p.id}">...Read More</a></p>
                <button  id="${p.id}" class="btn-primary comments" =>Comment</button>
                <a href="#" class="card-link">Like</a>
            </div>
            </div>
            
        `)
        
            
        }
    })
    

    
}
getAllPosts()











