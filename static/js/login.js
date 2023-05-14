function onSubmitLogin(){
    var username = $('#username').val();
    var password = $('#password').val();

    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/account/user/login/',
        contentType: 'application/json',
        data: JSON.stringify({
            'username' : username,
            'password' : password
        }),
        success : function(data){
            alert('로그인을 성공했습니다.');
            window.location.href('index.html');
        },
        error: function(request, status, error){
            alert('로그인에 실패했습니다.');
        }
    })
}