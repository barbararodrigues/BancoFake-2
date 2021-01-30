
// chamada para fazer novo registro
const baseURL=  'https://accenture-java-desafio.herokuapp.com/';

const login = document.getElementById('login');
login.innerHTML = `
<div class="row mt-5 mb-5">
        <div class="col-md-6">
          <div class="fluid text-center">
            <h2>Olá!</h2>
            <p>Seja bem vindo a sua conta digital!</p>
          </div>
          <img
            src="img/img-2.jpg"
            class="img-fluid m-auto"
            width="100%"
            alt="Imagem"
          />
        </div>
        <div class="col-md-6 m-auto">
          <div class="card">
            <h4 class="mt-5 mb-4 text-center">
              Informe aqui seu usuário e senha
            </h4>
            <form class="p-5">
              <div class="form-group">
                <label for="InputEmail">Usuário:</label>
                <input type="text" id="user" class="form-control mb-4" />
              </div>

              <div class="form-group">
                <label for="inputPassword">Senha:</label>
                <input
                  type="password"
                  id="password"
                  class="form-control mb-4"
                />
              </div>
              <div class="form-group form-check mb-4">
                <input id="checkbox" type="checkbox" class="form-check-input" />
                <label class="form-check-label" for="check"
                  >Me mantenha conectado</label
                >
              </div>
              <div class="d-flex justify-content-between">
                <a class="btn btn-danger" href="singup.html"
                  >Crie sua conta aqui</a
                >
                <button id="submit_login" onClick="Login()" class="btn btn-danger">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>`;

function NewRegister() {
    let user = document.getElementById('user').value;
    let name= document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('repassword').value;
    let cpf = document.getElementById('cpf').value.replace(/[^\d]/g, "");


    if (password === repassword){
         axios.post(`${baseURL}usuarios`, {
             cpf: cpf,
             login: user,
             nome: name,
             senha: password
          },{
              headers: {'Content-Type': 'application/json'}
          } )
        .then(
            res => {
                if (res.status === 200) {
                    window.location.replace('#/login');
                } else{
                    alert ('Confira sua senha!');
                }
            
             }
        )
    } else {
        alert ('Confira sua senha!');
    }
}



// chamada para o login
function Login() {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    if (user.length >= 4 && password.length >= 6) {


        axios.post(`${baseURL}login`, {
            senha: password,
            usuario: user
        })
            .then(
                res => {
                    console.log(res);
                    if (res.status === 200) {
                       // window.location.href('dash.html');
                        localStorage.setItem('@token', res.data.token);
                        localStorage.setItem('userDataAccount', JSON.stringify(res.data));
                        document.userDataAccount = res.data;

                    }
                }
            )
    } else {
        alert("Usuário ou senha errado!!")
    }


};
