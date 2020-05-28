// // JSnack #1
// /* L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga. */
//
// // RICHIESTA INFO UTENTE
// // Richiesta parola 1
// var firstWord = prompt('Inserisci la prima parola');
// // Richiesta parola 2
// var secondWord = prompt('Inserisci la seconda parola');
// // Creo messaggio output
// var messaggio;
//
// // CONFRONTO LUNGHEZZA PAROLE E STAMPA RISULTATO
// if (firstWord.length > secondWord.length) {
//   console.log(messaggio = 'La prima parola è più lunga');
// } else if (secondWord.length > firstWord.length) {
//   console.log(messaggio = 'La seconda parola è più lunga');
// } else {
//   console.log(messaggio = 'Le due parole hanno la stessa lunghezza');
// }





// JSnack #2
/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

// FOR LOOP
// RICHIEDO INFO UTENTE
// Creo array per elenco numeri inseriti dall Utente
// var userNumbers = [];
// var sum = 0;
// // Richiedo numeri all'utente (x 5)
// for (var i = 0; i < 5; i++) {
//   userNumbers = parseInt(prompt('Inserisci un numero'));
//   sum = sum + userNumbers;
//   console.log(sum);
// }

// WHILE LOOP
// RICHIEDO INFO UTENTE
// Creo array per elenco numeri inseriti dall Utente
// var userNumbers = [];
// var sum = 0;
// var i = 0;
// // Richiedo numeri all'utente (x 5)
// while (i < 5) {
//   userNumbers = parseInt(prompt('Inserisci un numero'));
//   sum = sum + userNumbers;
//   console.log(sum);
//   i++;
// }





// // JSnack #3
// /* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */
//
// // Creo Array - elenco cognomi invitati
// var arrInvitati = ['Rossi', 'Bianchi', 'Verdi', 'Storella'];
// console.log(arrInvitati);
//
// // Richiesta cognome utente
// var userSurname = prompt('Inserisci il tuo cognome');
// console.log(userSurname);
//
// // Ricerca cognome specifico
// var surnameTrovato = false;
//
// for (var i = 0; i < arrInvitati.length; i++) {
//   var thisSurname = arrInvitati[i];
//   if (thisSurname === userSurname) {
//     surnameTrovato = true;
//   }
// }
//
// // Display output
// if (surnameTrovato) {
//   console.log('Sei in lista! Entra pure ' + userSurname + '!');
// } else {
//   console.log('Spiacente '+ userSurname + ', non sei in lista.');
// }





// JSnack #4
/* Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero. */

// RICHIESTA INPUT UTENTE
// Richiesta numero Utente
var numeroUtente = prompt('Inserisci un numero di 4 cifre');
console.log(numeroUtente);

// Divido singole cifre del numero UTENTE
while (!(numeroUtente >= 1000 && numeroUtente <= 9999) ) {
  numeroUtente = parseInt(prompt('Errore! Inserisci un numero di 4 cifre'))
}

var numeroUtenteString = numeroUtente.toString();
var numeroUtenteArray = numeroUtenteString.split("");
console.log(numeroUtenteArray);

var sum = 0;
for (var i = 0; i < numeroUtenteArray.length; i++) {
  sum = sum + parseInt(numeroUtenteArray[i]);
}
console.log(sum);
