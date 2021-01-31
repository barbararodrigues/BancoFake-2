const app = document.getElementById('app');
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
            Hoje é ${DayName[Data.getDay()]} dia ${Data.getDate()} de ${MonName[Data.getMonth()]} de ${Data.getFullYear()}
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
  
  