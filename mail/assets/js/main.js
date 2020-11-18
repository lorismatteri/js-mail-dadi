// Chiedi all’utente la sua email,
var userMail = prompt('Inserisci il tuo indirizzo e-mail');

// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var mails = ['cristianoronaldo@gmail.com', 'diozlatan@gmail.com', 'leomessi@gmail.com'];

var newMail = false;

// if (mails[0] == userMail || mails[1] == userMail || mails[2] == userMail) {
//   document.getElementById('welcome').innerHTML = "Ciao " + userMail + ", benvenuto nel lato oscuro della Forza!";
// } else {
//   document.getElementById('welcome').innerHTML = "Addio " + userMail + ", non sei degno!";
// }

// proviamo a usare for stavolta per bene
for (i = 0; i < mails.length; i++) {
  var email = mails[i];

  if (email === userMail) {
    newMail = true;
  }
}

if (newMail) {
  document.getElementById('welcome').innerHTML = "Ciao " + userMail + ", benvenuto nel lato oscuro della Forza!";
  } else {
  document.getElementById('welcome').innerHTML = "Addio " + userMail + ", non sei degno!";
}
