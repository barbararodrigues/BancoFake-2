const baseURL=  'https://accenture-java-desafio.herokuapp.com/';

$(document).ready(function(){
document.getElementById('submit_login').addEventListener('click', () => {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    if (user.length >= 4 && password.length >= 6) {
        loader(true);

       axios.post(`${baseURL}login`, {
            senha: password,
            usuario: user
        })
            .then(
                res => {
                    console.log(res);
                    if (res.status === 200) {
                        loader(false);
                        localStorage.setItem('userDataAccount', JSON.stringify(res.data));
                        document.userDataAccount = res.data;
                        window.location.replace('dash.html')

                    }
                }
            ).catch(err =>{
                console.log(err);
                loader(false);
              })
        
    } else {
        alert("Usuário ou senha errado!!")
    }

});

function loader(mostrar){
    if(mostrar){
        if(!document.getElementById("modalLoader")){
            let corpo = document.getElementsByTagName("body")[0];
            let modalLoader = `
                <div class="modal fade" id="modalLoader" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-sm ">
                        <div class="modal-content">
                            <div class="modal-header modalLoaderHeader">
                                <h5 class="modal-title" id="exampleModalLongTitle">Carregando...</h5>                                                               
                            </div>
                            <div class="modal-body centralizado">
                                <div class="spinner-border" role="status">                            
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>`;
            corpo.innerHTML += modalLoader;
        }        
        $("#modalLoader").modal("show");
    }    
    else{
        setTimeout(()=>{
            $("#modalLoader").modal("hide");        
        },200)        
    }
  }
  


})
  