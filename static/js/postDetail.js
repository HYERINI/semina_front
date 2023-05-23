var postId = localStorage.getItem('postId');

function createNewComment(){
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/comment/create/',
        contentType: 'application/json',
        data: JSON.stringify({
            'content' : $('#commentInput').val(),
        }),
        success: function(data){
            alert('댓글이 등록되었습니다.');
        },error: function(data){
            alert('댓글을 등록하지 못했습니다.');
        }
    })
}

function deletePost(id){
    $.ajax({
        type: 'DELETE',
        url: 'http://127.0.0.1:8000/post/delete/' + id,
        contentType: 'application/json',
        success: function(data){
            alert('성공적으로 삭제되었습니다.');
            window.location ='./post.html';
        },error: function(data){
            alert('삭제하지 못했습니다.');
        }
    })
}

function moveEditPost(id){
    window.location = './editPost.html';
}


