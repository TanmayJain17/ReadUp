/* $('#navigation').load('../components/navbar.html')
$('#footer').load('../components/footer.html')
$('#contents').load('../components/writePostForm.html') */
$(document).ready(function() {
    let val = $('#username')
    let theUserName = val.text()
    let btnPost = $('#btnPost')
    let inptTitle = $('#inptTitle')
    let inptBody = $('#inptBody')
    btnPost.click(function() {
        if(!(inptTitle.val())||!(inptBody.val()||!(theUserName))){
            window.alert('you need to have title and body both')
        }
        else{
            
            let mainTitle = inptTitle.val()
            let mainBody = inptBody.val()
            $.post('/api/posts',{theName:theUserName,title:mainTitle,body:mainBody},(post)=>{
                
                window.alert('Your post has beed created. Check Home Page')
            })
        }
    })
})