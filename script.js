$(document).ready(function() {
    $('#registerForm').submit(function(event) {
        event.preventDefault(); 

        var login = $('#login').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        if (login === '' || password === '' || confirmPassword === '') {
            $('#error').text('Заповніть всі поля');
            $('#success').text('');
        } else if (password !== confirmPassword) { 
            $('#error').text('Паролі не збігаються');
            $('#success').text('');
        } else if (password == confirmPassword) {
            window.location.href = 'confirmed.html';
        }
    });
});