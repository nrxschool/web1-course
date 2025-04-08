function countdown(endDate) {
  let days, hours, minutes, seconds;

  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
    return;
  }

  setInterval(calculate, 1000)

  function calculate() {
    let startDate = new Date().getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {

      //24h*60m*60s = 86400

      //Calcula o número de dias restates
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);

      //Calcula o número de horas restates
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);

      //Calcula o número de minutos restates
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);

      //Calcula o número de segundos restates
      seconds = parseInt(timeRemaining)

      document.getElementById("days").innerHTML = pad(days, 2)
      document.getElementById("hours").innerHTML = pad(hours, 2)
      document.getElementById("minutes").innerHTML = pad(minutes, 2)
      document.getElementById("seconds").innerHTML = pad(seconds, 2)

    } else {
      return;
    }
  }
}

function pad(n, width) {
  n = n.toString();
  return (n.length >= width) ? n : '0' + n;
}

function submit(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  //Verifica se tem um nome é válido
  if (!name.value || name.value.length <= 3) {
    name.setAttribute("aria-invalid", "true")
    name.setAttribute("aria-errormessage", "Por favor, insira um nome com mais de 3 caracteres")
    const error = document.querySelector("form input[name='name']+small")
    error.textContent = "Por favor, insira um nome com mais de 3 caracteres"
    return false;
  }

  //Verifica se o formato do email é válido
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email.value)) {
    email.setAttribute("aria-invalid", "true")
    email.setAttribute("aria-errormessage", "Por favor, insira um email válido! Ex.: seunome@exemple.com")
    const error = document.querySelector("form input[name='email']+small")
    error.textContent = "Por favor, insira um email válido! Ex.: seunome@exemple.com"
    return false;
  }

  // Verifica se o formato do phone é válido
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone.value)) {
    phone.setAttribute("aria-invalid", "true")
    phone.setAttribute("aria-errormessage", "Por favor, insira um telefone válido (apenas números e 10 dígitos)")
    const error = document.querySelector("form input[name='phone']+small")
    error.textContent = "Por favor, insira um telefone válido (apenas números e 10 dígitos)."
    return false;
  }
  // http://ec2-54-237-81-72.compute-1.amazonaws.com/subscription
  // // http://ec2-54-87-39-196.compute-1.amazonaws.com/subscription
  fetch("http://ec2-54-87-39-196.compute-1.amazonaws.com/subscription",
    {
      method: "POST",
      body: JSON.stringify({ name: name.value, phone: phone.value, email: email.value }),
      headers: {
        "Content-Type": "application/json"
      }
    }
  ).then(() => document.querySelector(".success").style.display = "flex")

}




document.querySelector("form").addEventListener("submit", submit)

countdown('2024-10-20T23:59:59')
//2024-10-20T23:59:59