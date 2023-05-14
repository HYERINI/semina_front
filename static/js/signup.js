function onSubmitSignup(){
    var username = $('#username').val();
    var password = $('#password').val();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var email = $('#email').val();

    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/account/user/create/',
        contentType : 'application/json',
        data: JSON.stringify({
            'username' : username,
            'password' : password,
            'first_name' : first_name,
            'last_name' : last_name,
            'email' : email
        }),
        success : function(data){
            alert('회원가입을 성공했습니다.');
            window.location.href('login.html');
        },
        error: function(request, status, error){
            alert('회원가입에 실패했습니다.');
        }
    })
}