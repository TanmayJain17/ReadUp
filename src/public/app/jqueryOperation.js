
$(document).ready(function(){
    $('.comments').click(function(event) {
        
        let pId = $(event.target).attr('id');
        $('#allPosts').hide("slow",()=>{
            $.get(`/api/posts/${pId}`,(data)=>{
                $('#contents').append(`<h3 style="text-align:center;" style="margin-top:3px;">Add Comment : ${data.title} by <h4 style="text-align:center;"><i>${data.user.username}</i></h4></h3>
                <div id="commentForm" class="container mt-5">
                    <form>
                    <div class="form-group">
                      <label for="exampleFormControlInput1"><b>Title</b></label>
                      <input type="text" class="form-control" id="inptTitle" placeholder="Heading of your comment">
                    </div>
    
    
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1"><b>Content</b></label>
                      <textarea class="form-control" id="inptBody" rows="10" spellcheck="false" placeholder="Your comment goes here"></textarea>
                    </div>
                    
                  </form>
                  <button id="btnPost" data-postId="${pId}" class="btn btn-primary">Post Comment</button>
    
                 </div>
                 <script defer src="../app/comments.js"></script>`)
            })
            
        })
        
    })
})


/* $(
    function(){
        
            
        
        $('.comments').click((event)=>{
           
           let thatComment = $(event.target)
            let pId = thatComment.attr('id')
            
                $('#allPosts').hide(()=>{
                    $.get(`/api/posts/${pId}`,(data)=>{
                        let h1 = $(`<h1>Add Comment :${data.title} by <i>${data.user.username}</i></h1>`)
                        $('#contents').append(h1).append(`<div id="commentForm" class="container mt-5">
                        <form>
                        <div class="form-group">
                          <label for="exampleFormControlInput1"><b>Title</b></label>
                          <input type="text" class="form-control" id="inptTitle" placeholder="Heading of your comment">
                        </div>


                        <div class="form-group">
                          <label for="exampleFormControlTextarea1"><b>Content</b></label>
                          <textarea class="form-control" id="inptBody" rows="10" spellcheck="false" placeholder="Your comment goes here"></textarea>
                        </div>
                        <button id="btnPost" class="btn btn-primary">Post Comment</button>
                      </form>

                     </div>`)
                    })
                    
               
            

            
            
            
            $('#btnPost').click(()=>{
                let comTitle = $('#inptTitle').val()


                let comBody = $('#inptBody').val()

                let commentor = $('#userName').val()
                
                console.log(commentor)
                console.log(comBody)
                console.log(comTitle)

            })
            
            


        })
    }
)
 */