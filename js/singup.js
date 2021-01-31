let baseURL = '';
baseURL = baseUrl();


$(document).ready(function () {
    document.getElementById('submit_new_register').addEventListener('click', () => {
        let user = document.getElementById('user').value;
        let name = document.getElementById('name').value;
        let password = document.getElementById('password').value;
        let repassword = document.getElementById('repassword').value;
        let cpf = document.getElementById('cpf').value.replace(/[^\d]/g, "");


        if (password === repassword) {
            LoadContent();
            axios.post(`${baseURL}usuarios`, {
                cpf: cpf,
                login: user,
                nome: name,
                senha: password
            }, {
                headers: { 'Content-Type': 'application/json' }
            })
                .then(
                    res => {
                        if (res.status === 200) {
                            window.location.replace('login.html');
                        } else {
                            alert('Confira sua senha!');
                        }

                    }
                ).catch(err => {
                    console.log(err);
                    window.location.replace('singup.html');

                })
           
        } else {
            alert('Confira sua senha!');
        }
    });

});

