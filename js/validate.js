function isEmpty(value) {
  if (value == '') {
    return true
  } else {
    return false
  }
}

function validateForm() {
  var nome = document.getElementById('nome')
  var email = document.getElementById('email')
  // verificar se o nome está vazio
  if (isEmpty(nome.value)) {
    alert('Nome não informado')
    nome.focus()
    return false
  }

  if (isEmpty(email.value)) {
    alert('E-mail não informado')
    email.focus()
    return false
  }
  // Se todos os campos estiverem ok, valida o formulario
  alert('Formulário validado!')
  return true
}
