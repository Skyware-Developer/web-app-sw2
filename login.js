var username = 'admin'
var password = 'UdeM2019*'

function validarCredenciales() {
    user = document.getElementById('username').value
    pass = document.getElementById('password').value

    if(user === username && pass === password){
        alert('Inicio de sesión exitoso.')
    }else{
        alert('Usuario y/o clave errados.')
    }
}