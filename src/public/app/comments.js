$('#btnPost').click(()=>{
    if(!$('#inptTitle').val()||!$('#inptBody').val()||!$('#username').text()){
        window.alert('need proper input values')
    }
    else{
        $.post('/api/comments',{postId:$('#btnPost').attr('data-postId'),userName:$('#username').text(),cTitle:$('#inptTitle').val(),cBody:$('#inptBody').val()},(data)=>{
            window.alert('comment Posted')
            window.location.replace("/");
        })
    }
})