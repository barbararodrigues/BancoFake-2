
// chamada para fazer novo registro
const baseURL=  'https://accenture-java-desafio.herokuapp.com/';


//navbar
const menu = document.getElementById('nav');
menu.innerHTML = 
        `<div class="container m-auto" width="100%">
            <a class="navbar-brand" href="#">
                <img src="img/logo.svg" class="img-fluid" width="200px" alt="">
            </a>
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                    <li class="nav-item"><a class="nav-link" aria-current="page" href="index.html">Home</a></li>
                    <li class="nav-item">
                    <a class="nav-link" onClick="LoadLogin()" >Entrar</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" onClick="LoadDash()" >DashBoard</a>
                    </li>
                </ul>
            </div>
        </div>
        `;

//rodape
const rodape = document.getElementById('rodape');
rodape.innerHTML = `
<p>© Copyrigth 2021 - VouVacinar StudioCode</p>`;

//corpo site
const app = document.getElementById('app');
    app.innerHTML = `
    <div class="row mt-5 mb-5">
            <div class="col-md-6 m-auto">
            <div class="fluid justify-center pt-5">
                <h1>Banco Minas Gerais</h1>
                <p>
                O Banco Minas Gerais é um banco 100% digital oferecemos contas totalmente isentas de tarifas.</p>
                <p> Os bancos digitais estão crescendo e ganhando cada vez mais clientes no Brasil. Eles vieram para suprir
                com tecnologia e eficiência um mercado que sofria com a burocracia nos grandes bancos. Por isso, mudamos a
                forma de você cuidar de suas finanças pessoais.</p>
                <p>Quem é cliente, possui cartões de crédito e débito, um controlador de despesas integrado à conta e acesso a investimentos.</p>
            </div>
            </div>
            <div class="col-md-6 m-auto">
                <img
                src="img/img-4.jpg"
                class="img-fluid m-auto"
                width="100%"
                alt="Imagem"
                />
            </div>
            </div>
    </div>`;




function LoadLogin() {
    app.innerHTML = `
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
                    <button class="btn btn-danger" onClick="LoadSingUp()">Crie sua conta aqui</button>
                    <button id="submit_login" onClick="Login()" class="btn btn-danger">Entrar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>`;
}

function LoadSingUp() {
    app.innerHTML = `
    <div class="row mt-5 mb-5">
        <div class="col-md-6 m-auto">
          <div class="card">
            <h4 class="mt-5 mb-4 text-center">Cadastre suas informações:</h4>
            <form class="p-2">
              <div class="form-group p-2">
                <label for="InputName">Nome:</label>
                <input type="text" id="name" class="form-control mb-4" />
              </div>
              <div class="d-flex">
                <div class="form-group p-2">
                  <label for="Inputcpf">CPF:</label>
                  <input
                    type="text"
                    id="cpf"
                    maxlength="11"
                    class="form-control mb-4"
                  />
                </div>

                <div class="form-group p-2">
                  <label for="Inputuser">Usuário:</label>
                  <input type="text" id="user" class="form-control mb-4" />
                </div>
              </div>
              <div class="d-flex">
                <div class="form-group p-2">
                  <label for="inputPassword">Senha:</label>
                  <input
                    type="password"
                    id="password"
                    class="form-control mb-4"
                  />
                </div>
                <div class="form-group p-2">
                  <label for="inputRePassword">Repetir senha:</label>
                  <input
                    type="password"
                    id="repassword"
                    class="form-control mb-4"
                  />
                </div>
              </div>

              <div class="d-flex justify-content-between">
                <a class="btn btn-danger" href="login.html">Voltar</a>
                <button id="submit_new_register" onclick="NewRegister()" class="btn btn-danger">Entrar</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <div class="fluid text-center">
            <h1>Olá!</h1>
            <h2>Abra sua conta gratuita!</h2>
            <p>Serviços online e sem burocracia!</p>
          </div>
          <img
            src="img/img-3.jpg"
            class="img-fluid m-auto"
            width="100%"
            alt="Imagem"
          />
        </div>
      </div>`;
}

function ModalCredito() {
  const ModalCredit = (`
  <button data-toggle="modal" data-target="#modal_aside_right" class="btn btn-danger" type="button">  Transferência  </button>
  <div id="modal_aside_right" class="modal fixed-right fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-aside" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Realize uma transferência </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
          <div class="modal-body">
            <form class="p-5 container">
              <div class="form-group">
                <label for="conta">Conta:</label>
                <input type="text" id="conta" class="form-control  mb-4">                       
             </div>
              <div class="form-group">
                 <label for="conta">Conta Destino:</label>
                  <input type="text" id="contadestino" class="form-control  mb-4">                       
             </div>
             <div class="form-group">
                <label for="data">Data:</label>
                <input type="text" id="data" class="form-control  mb-4">                       
              </div>
               <div class="form-group">
                  <label for="descricao">Descrição:</label>
                  <textarea type="text" id="descricao" class="form-control  mb-4">   </textarea>                    
                </div>
                 <div class="form-group">
                    <label for="planoconta">Conta ou Login:</label>
                    <input type="text" id="login" class="form-control  mb-4">                       
                </div>
                <div class="form-group">
                    <label for="planoconta">Plano Conta:</label>
                    <input type="text" id="planoconta" class="form-control  mb-4">                       
                </div>
                <div class="form-group">
                    <label for="valor">Valor:</label>
                    <input type="text" id="valor" class="form-control  mb-4">                       
                </div>   

                   <button class="btn btn-danger" id="pay-credit"> Transefrir </button>    
              </form> 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            </div>
          </div>
    </div> 
  </div> 
`)

  return ModalCredit;
}


function LoadDash() {
    app.innerHTML = `
    <div>
        <div class="dash-contentheading">
            <h1>Seja bem vindo ao seu internet banking</h1>
                <button id="destroy_session" class="btn btn-danger">Encerrar sessão</button>
        </div>
        <h3> Olá, Bárbara</h3>
        <br>

        <div>
            <button id="refresh" class="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                </svg>
            </button>
            <button id="destroy_session" class="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
            </button>
        </div>
        


        <div class="alert alert-warning alert-dismissible fade show mt-2" role="alert">
            Hoje é segunda dia 10 de outubro de 2020
        </div>

        ${ModalCredito()}
        <div class="col-md-6 mt-4">  
            <div class="card" style="width: 100%;">
                <div class="card-body">
                    <h5 class="card-title">Conta Crédito</h5>
                    <h6 class="card-subtitle mb-2 text-muted"> Saldo: R$ 1200,00</h6>
                    <p class="card-text">Movimentação tipo:</p> 
                      <div class="d-flex">
                            10/10/10 descricao R$ 1000  
                      </div>
                </div>
            </div>
            </div>
        </div>
     
    </div>`;
}


   

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
async function Login() {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    if (user.length >= 4 && password.length >= 6) {

  var url= 'https://accenture-java-desafio.herokuapp.com/login';
       await axios.post(url, {
            senha: password,
            usuario: user
        })
            .then(
                res => {
                    console.log(res);
                    if (res.status === 200) {
                        localStorage.setItem('userDataAccount', JSON.stringify(res.data));
                        document.userDataAccount = res.data;
                        LoadDash();

                    }
                }
            ).catch(err =>{
                console.log(err);
              })
              console.log("Sai aqui");
    } else {
        alert("Usuário ou senha errado!!")
    }


};
