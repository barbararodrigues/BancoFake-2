


const DayName = ['Domingo', 'Segunda feira', 'Terca feira', 'Quarta feira', 'Quinta feira', 'Sexta feira', 'Sábado']
const MonName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


function LoadContent() {
  let app = document.getElementsByTagName("body")[0];
  app.innerHTML =  `<div class="text-center">
                      <div class="spinner-border" role="status">
                          <span class="visually-hidden"></span>
                      </div>
                      </div>`;

}


function baseUrl() {
  return 'https://accenture-java-desafio.herokuapp.com/';
}

function dayName(){
  return DayName;
}

function monName(){
  return MonName;
}




