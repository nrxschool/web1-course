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


countdown('2024-10-20T23:59:59')
//2024-10-20T23:59:59