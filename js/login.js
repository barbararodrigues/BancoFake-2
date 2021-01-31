let baseURL = '';
baseURL = baseUrl();

$(document).ready(function(){
document.getElementById('submit_login').addEventListener('click', () => {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    if (user.length >= 4 && password.length >= 6) {
        LoadContent()

       axios.post(`${baseURL}login`, {
            senha: password,
            usuario: user
        })
            .then(
                res => {
                    console.log(res);
                    if (res.status === 200) {
                        localStorage.setItem('userDataAccount', JSON.stringify(res.data));
                        document.userDataAccount = res.data;
                        window.location.replace('dashboards.html');

                    }
                }
            ).catch(err =>{
                console.log(err);
                window.location.replace('login.html');

              })
        
    } else {
        alert("Usuário ou senha errado!!")
    }

});




});
  