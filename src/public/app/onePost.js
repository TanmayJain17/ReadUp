let pId = parseInt(location.search.substring(1))
$.get('/api/posts/' + pId, (thePost)=>{
    $('#title').text(`${thePost.title}`)
    $('#authorname').text(`${thePost.user.username}`)
    $('#body').text(`By - ${thePost.body}`)
    
})