let formulario = document.getElementById("meuFormulario");

function enviar(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  let erroNome = document.getElementById("erro-nome")
  erroNome.textContent = ""

  let erroEmail = document.getElementById("erro-email")
  erroEmail.textContent = ""

  console.log("nome", nome);
  console.log("email", email);

  if (nome.length <= 3) {
    erroNome.textContent = "O nome precisa ter mais de 3 caracteres"
    return;
  }

  if (!email.includes("@")) {
    erroEmail.textContent = "O email é inválido"
    return;
  }


  formulario.submit()
}

formulario.addEventListener("submit", enviar)