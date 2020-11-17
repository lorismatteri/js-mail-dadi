// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
var btnLancia = document.getElementById('tira_dadi');
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
btnLancia.addEventListener("click", function () {
  var userDado1 = Math.floor(Math.random() * 6) + 1;
  var userDado2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById('user_dado_1').innerHTML = userDado1;
  document.getElementById('user_dado_2').innerHTML = userDado2;

  var PCdado1 = Math.floor(Math.random() * 6) + 1;
  var PCdado2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById('pc_dado_1').innerHTML = PCdado1;
  document.getElementById('pc_dado_2').innerHTML = PCdado2;

  if (userDado1 + userDado2 > PCdado1 + PCdado2) {
    document.getElementById('greetings').innerHTML = 'Complimenti, hai vinto!';
  } else if (userDado1 + userDado2 < PCdado1 + PCdado2) {
      document.getElementById('greetings').innerHTML = 'Mi dispiace, hai perso :( #feellikeTrump';
  } else {
    document.getElementById('greetings').innerHTML = 'Pareggio! Hai diritto a un altro lancio!';
  }
});
