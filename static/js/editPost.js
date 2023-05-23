var postId = localStorage.getItem('postId');

$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/post/detail/' + postId,
        contentType: 'application/json',
        success: function(data){
            $('#postTitle').val(data.post.title);
            $('#postContent').append(data.post.content);
        }
    })
})

function completePost(id){
    $.ajax({
        type: 'PUT',
        url: 'http://127.0.0.1:8000/post/update/' + postId,
        contentType: 'application/json',
        data: JSON.stringify({
            'title' : $('#postTitle').val(),
            'content' : $('#postContent').val(),
        }),
        success: function(data){
            alert('글 수정을 완료했습니다.');
            window.location = './post.html';
        }, error: function(){
            alert('글 수정을 실패했습니다!!!!');
        }
    })
}
