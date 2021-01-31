

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
                    LoadLogin();
                } else{
                    alert ('Confira sua senha!');
                }
            
             }
        ).catch(err =>{
          console.log(err);
         
        })
        LoadContent();   
    } else {
        alert ('Confira sua senha!');
    }
}