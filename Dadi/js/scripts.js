/*Dadi*/

// Genero un numero random per Utente
const userNumber = Math.floor(Math.random()* (6 - 1 + 1)) + 1;
console.log('userNumber', userNumber, typeof userNumber);


// Genero un numero random per PC
const pcNumber = Math.floor(Math.random()* (6 - 1 + 1)) + 1;
console.log('pcNumber', pcNumber, typeof pcNumber);

// Controllare chi ha vinto

if (userNumber > pcNumber) {
    alert('Hai vinto!');
}
else if (userNumber < pcNumber) {
    alert('Hai perso:(');
}
else{
    alert('Pareggio!');
}