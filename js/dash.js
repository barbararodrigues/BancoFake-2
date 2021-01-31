const baseURL = '';
baseURL = baseUrl();

$(document).ready(function () {
    let token = '';
    token = getToken();
    if (token) {
        document.getElementById('destroy_session').addEventListener('click', function () {
            localStorage.clear()
            window.location.replace('login.html')
        })

        document.getElementById('pay-credit').addEventListener('click', function () {
            let conta = document.getElementById('conta').value,
                contaDestino = document.getElementById('destino').value,
                data = document.getElementById('data').value,
                descricao = document.getElementById('desc').value,
                login = document.getElementById('logindestino').value,
                planoConta = document.getElementById('plan').value,
                valor = document.getElementById('value-transfer').value

            let postData = {
                conta,
                contaDestino,
                data,
                descricao,
                login,
                planoConta,
                valor
            }

            axios.post(baseURL + 'lancamentos', postData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }

            }).then(
                res => {
                    if (res.status === 200) {
                        window.location.reload()
                    }
                }
            ).catch(err => {
                console.log(err)
                alert('Oops, algo deu errado')
            })
        })


        function getToken() {
            let dataUser = JSON.parse(localStorage.getItem('userDataAccount'))
            let { token } = dataUser;
            return token;
        }

        function getUser() {
            let dataUser = JSON.parse(localStorage.getItem('userDataAccount'))
            let { usuario: { login } } = dataUser;
            return usuario;
        }

    } else {
        window.location.replace('login.html')
    }


});