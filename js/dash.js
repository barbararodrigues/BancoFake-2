let baseURL = '';
baseURL = baseUrl();
let DayName = dayName();
let MonName = monName();

$(document).ready(function () {
    function getToken() {
        let dataUser = JSON.parse(localStorage.getItem('userDataAccount'))
        if(dataUser){
            let { token } = dataUser;
            return token;
        } else {
            window.location.replace('login.html');
        }
       
    }

    function getUser() {
        let dataUser = JSON.parse(localStorage.getItem('userDataAccount'))
        let { usuario: { login } } = dataUser;
        return login;
    }

    function getNome() {
        let dataUser = JSON.parse(localStorage.getItem('userDataAccount'))
        let { usuario: { nome } } = dataUser;
        return nome;
    }



    let token = '';
    token = getToken();
    if (token) {
        LoadWelcome();
        LoadTransferencia();
        document.getElementById('destroy_session').addEventListener('click', function () {
            localStorage.clear()
            window.location.replace('login.html');
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
            LoadContent()
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



        async function LoadTransferencia() {
            let headersDefault = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            };
            let login = getUser();
            let response = await axios.get(`${baseURL}dashboard?fim=2021-01-31&inicio=2021-01-01&login=${login}`, headersDefault)
            CriaTransferencia(response.data);
        }


        function LoadWelcome() {
            const dateNow = new Date();
            let welcome = document.getElementById('welcome');
            welcome.innerHTML = `
            <button
            id="myButtonAlert"
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          Olá ${getNome()} que bom que você está de volta! Hoje é ${DayName[dateNow.getDay()]} dia ${dateNow.getDate()} de ${MonName[dateNow.getMonth()]} de ${dateNow.getFullYear()}
            `;
        }

        function LoadEntrada(valorEntradas) {
            let entradas = document.getElementById('entradas');
            entradas.innerHTML = `
            <div class="card-body">
          <div class="d-flex flex-row justify-content-between">
            <p class="align-self-center m-0 fs-6 m-2">Entradas</p>
            <i class="bi bi-arrow-up-circle"></i>
          </div>

          <div>
            <p class="fs-4 m-0 p-0">${Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
                }).format(valorEntradas)}</p>
          </div>
        </div>
            `;
        }


        

        function LoadSaldo(contaCredito) {
            let saldo = document.getElementById('saldo');
            saldo.innerHTML = `
            <div class="card-body bg-success">
            <div class="d-flex flex-row justify-content-between">
              <p class="align-self-center m-0 fs-6 m-2">Total - Conta Corrrente : ${
                contaCredito.id
                }</p>
            </div>
            <div>
              <p class="fs-4 m-0 p-0">
                ${Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
                }).format(contaCredito.saldo)}
              </p>
            </div>
          </div>
            `;
        }

        function CriaTransferencia(data) {
            const { contaBanco, contaCredito } = data;
            let ContaBancoLancamentos = contaBanco.lancamentos;
            let ContaCreditoLancamentos = contaCredito.lancamentos;
            let entradas = ContaBancoLancamentos.reduce((total, lancamento) => total + lancamento.valor, 0); 
            LoadEntrada(entradas);
            LoadSaldo(contaCredito);
            let transferencias = document.getElementById('transferencias');

            transferencias.innerHTML = `
            <h3 class="text-muted"> Conta Crédito </h3>
            <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" class="c-base">Descrição</th>
                        <th scope="col" class="c-base">Valor</th>
                        <th scope="col" class="c-base">Categoria</th>
                        <th scope="col" class="c-base">Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${
                        ContaCreditoLancamentos
                          ? ContaCreditoLancamentos.map(
                              (lanc) => `
                      <tr>
                        <th scope="row" class="c-primary">${lanc.descricao}</th>
                        <td> ${Intl.NumberFormat("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        }).format(lanc.valor)}</td>
                        <td class="ml-4">${
                          lanc.tipo == "R"
                            ? '<i class="bi bi-arrow-up-circle">'
                            : '<i class="bi bi-arrow-down-circle">'
                        }</i></td>
                        <td>${convertData(lanc.data)}</td>
                      </tr>`
                            ).join("")
                          : ""
                      }
                    </tbody>
                  </table>
                  <h3 class="text-muted"> Conta Banco </h3>
            <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" class="c-base">Descrição</th>
                        <th scope="col" class="c-base">Valor</th>
                        <th scope="col" class="c-base">Categoria</th>
                        <th scope="col" class="c-base">Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${
                        ContaBancoLancamentos
                          ? ContaBancoLancamentos.map(
                              (lanc) => `
                      <tr>
                        <th scope="row" class="c-primary">${lanc.descricao}</th>
                        <td> ${Intl.NumberFormat("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        }).format(lanc.valor)}</td>
                        <td class="ml-4">${
                          lanc.tipo == "R"
                            ? '<i class="bi bi-arrow-up-circle">'
                            : '<i class="bi bi-arrow-down-circle">'
                        }</i></td>
                        <td>${convertData(lanc.data)}</td>
                      </tr>`
                            ).join("")
                          : ""
                      }
                    </tbody>
                  </table>`;
        }



    } else {
        window.location.replace('login.html')
    }


});