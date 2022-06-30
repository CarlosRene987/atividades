let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'

email.style.width = '100%'

function ValidaNome () {

    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red' 

    }
    else{
        txtNome.innerHTML = 'Nome Válido'
      txtNome.style.color = 'green'
      nomeOk= true
    }

}

function ValidaEmail () {

    let txtemail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
     } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
     }
  }

  function ValidaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
 
    if (assunto.value.length >= 150) {
       txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 150 caracteres'
       txtAssunto.style.color = 'red'
       txtAssunto.style.display = 'block'
    } else {
       txtAssunto.style.display = 'none'
       assuntoOk = true
    }
 }
 
 function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ('Documento enviado com sucesso!')
    } else {
       alert ('Preencha o Documento corretamente antes de enviar...')
    }
 }
 


