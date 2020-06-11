// // ****************************** JSnack #1 ******************************
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





// ****************************** JSnack #2 ******************************
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





// // ****************************** JSnack #3 ******************************
// /* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */
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





// // ****************************** JSnack #4 ******************************
// /* Chiedi un numero di 4 cifre all’utente e
//  calcola la somma di tutte le cifre che compongono il numero. */
//
// // RICHIESTA INPUT UTENTE
// // Richiesta numero Utente
// var numeroUtente = prompt('Inserisci un numero di 4 cifre');
// console.log(numeroUtente);
//
// // Divido singole cifre del numero UTENTE
// while (!(numeroUtente >= 1000 && numeroUtente <= 9999) ) {
//   numeroUtente = parseInt(prompt('Errore! Inserisci un numero di 4 cifre'))
// }
//
// var numeroUtenteString = numeroUtente.toString();
// var numeroUtenteArray = numeroUtenteString.split("");
// console.log(numeroUtenteArray);
//
// var sum = 0;
// for (var i = 0; i < numeroUtenteArray.length; i++) {
//   sum = sum + parseInt(numeroUtenteArray[i]);
// }
// console.log(sum);




// // ****************************** JSnack #5 ******************************
// /* Fai inserire un numero, che chiameremo N, all’utente.
//   Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
//   Ogni volta che ne crei uno, stampalo a schermo. */
//
// // INPUT
// // Richiesta input utente (n° utente = n° array da stampare)
// var userNumber = parseInt(prompt('Inserisci un numero'));
// // console.log(userNumber);
//
//
// // FOR Loop
// //Genera tot. n° array contenente 10 numeri da 1 a 100
// for (var i = 0; i < userNumber; i++) {
//   var newArray = [];
//
//   // Creo array contenente 10 numeri casuali
//   for (var j = 0; j < 10; j++) {
//     var randomNumber = Math.floor(Math.random() * 100) + 1;
//     newArray.push(randomNumber);
//   }
//   console.log(newArray);
// }




// // ****************************** JSnack #6 ******************************
// /* Generatore di “nomi cognomi” casuali:
// prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati. */
//
// // INPUT
// // Creo var contatore
// var numeroNomiFalsi = 5;
//
// // Creo Array nomi
// var arrayNomi = ['Laura', 'Michele', 'Francesco', 'Lisa', 'Anna'];
// console.log(arrayNomi);
//
// // Creo array nominativi falsi (Nome random + Cognome random)
// var arrayNominativiFalsi = [];
//
// // Genero Array cognomi
// var arrayCognomi = ['Storella', 'Bianchi', 'Rossi', 'Verdi', 'Gialli'];
// console.log(arrayCognomi);
//
// // FOR Loop
// // Creo array con nomi e cognomi random (falsa lista invitati)
// for (var i = 0; i < numeroNomiFalsi; i++) {
//
//   // Selezione elemento random Nome
//   var indexNomeRandom = Math.floor(Math.random() * arrayNomi.length);
//   var nomeRandom = arrayNomi[indexNomeRandom];
//   console.log(indexNomeRandom);
//   console.log(nomeRandom);
//
//   // Selezione elemento random Cognome
//   var indexCognomeRandom = Math.floor(Math.random() * arrayCognomi.length);
//   var cognomeRandom = arrayCognomi[indexCognomeRandom];
//   console.log(indexCognomeRandom);
//   console.log(cognomeRandom);
//
//   // Genero nuovo nome falso (concatenazione elemento random Nome + elemento random Cognome)
//   var nomeFalso = nomeRandom + ' ' + cognomeRandom;
//
//   // Aggiungo nome falso in array (lista falsa invitati)
//   arrayNominativiFalsi.push(nomeFalso);
// }
//
// // Stampo array nominativi falsi
// console.log(arrayNominativiFalsi);





// // ***************************** JSnack #7 - v.1 *****************************
// /* Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro. */
//
// // INPUT
// // Creo array con n° elementi (array contenente più elementi)
// var primoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(primoArray);
//
// // Creo array con n° elementi (array contenente meno elementi)
// var secondoArray = [11, 12, 13, 14, 15];
// console.log(secondoArray);
//
// var lunghezzaPrimoArray = primoArray.length;
// var lunghezzaSecondoArray = secondoArray.length;
//
//
// // WHILE Loop






// // ***************************** JSnack #7 - v.2 *****************************
// /* Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro. */
//
// // INPUT
// // Creo array con n° elementi (array contenente più elementi)
// var primoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(primoArray);
//
// // Creo array con n° elementi (array contenente meno elementi)
// var secondoArray = [11, 12, 13, 14, 15];
// console.log(secondoArray);
//
// var lunghezzaPrimoArray = primoArray.length;
// var lunghezzaSecondoArray = secondoArray.length;
//
// // Comparazione array
// if (lunghezzaPrimoArray > lunghezzaSecondoArray) {
//   // aggiungo elementi a secondoArray
//   secondoArray = riempiArray(secondoArray, lunghezzaPrimoArray);
//
// } else if (lunghezzaSecondoArray > lunghezzaPrimoArray) {
//   // aggiungo elementi a primoArray
//   primoArray = riempiArray(primoArray, lunghezzaSecondoArray);
//
// } else {
//   // Sono uguali, non devo aggiungere nulla
// }
//
//
// // Soluzione2: FUNZIONE
// function riempiArray(arrayDaRiempire, lengthDaRaggiungere) {
//
//   // Aggiungo elementi ad arrayDaRiempire finchè la sua lunghezza è pari a lengthDaRaggiungere
//   while (arrayDaRiempire.length < lengthDaRaggiungere) {
//
//     // genero un numero casuale
//     var numeroRandom = Math.floor(Math.random() * 100) + 1;
//     console.log(numeroRandom);
//
//     // appendo numeroRandom all'array
//     arrayDaRiempire.push(numeroRandom);
//   }
//
//   console.log(arrayDaRiempire);
//
//   // ritorno array modificato
//   return arrayDaRiempire;
// }





// // ****************************** JSnack #8 ******************************
// /* Crea due tag div con due id diversi: un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari. */
//
// // INPUT
// // Creo array numeri
// var arrayNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arrayNumeri);
//
// // FOR Loop
// for (var i = 0; i < arrayNumeri.length; i++) {
//
//   if (arrayNumeri[i] % 2 === 0) {
//     // inserisco in div verde
//     var numeroPari = document.getElementById('text-green').innerHTML += arrayNumeri[i] + '<br>';
//     console.log(numeroPari);
//   } else {
//     // inserisco in div rosso
//     var numeroDispari = document.getElementById('text-red').innerHTML += arrayNumeri[i] + '<br>';
//     console.log(numeroDispari);
//   }
// }





// ****************************** JSnack #9 ******************************
/*
L’utente ha a disposizione un input in cui inserire un nome di un giocatore e una select tramite la quale puoi scegliere se il giocatore va inserito tra i titolari o tra le riserve.
Quando si clicca sul button “Aggiungi” il nome viene aggiunto nella lista dei titolari se l’utente ha scelto titolari, altrimenti tra le riserve.
*/

// Evento al click di button “Add Player”
$('#btn-addPlayer').click(
  function() {
    var nomePlayer = $('#nome-player').val();
    var ruoloPlayer = $('#ruolo-player').val();
     // Se utente sceglie titolari, il nome del giocatore viene aggiunto nella lista titolari
     if (ruoloPlayer === 'titolari') {
       $('#lista-titolari ul').append('<li>' + nomePlayer + '</li>');
     }
     else {
       // altrimenti nella lista riserve
       $('#lista-riserve ul').append('<li>' + nomePlayer + '</li>');
     }
  }
);
