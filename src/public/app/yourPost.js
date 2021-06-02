
    function getYouPosts(){
        let usersname = $('#username').text();

        $.get(`/api/posts/${usersname}`,(data)=>{
            for(let eachPost of data){
                let body = eachPost.body.slice(0,200)
            
                //let theBody = body.slice(0,200)
            
            $('#yourPosts').append(`
            <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Post</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> Comments</a>
      </li>
      
      
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">${eachPost.title}</h5>
    <p class="card-text">${body}...</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>`)
}
        })
    }
getYouPosts()
