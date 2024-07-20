/*Mail*/

const userEmail = prompt('Inserisci la tua email:');
console.log('userEmail', userEmail, typeof userEmail);

const users = [
    'rtrezzi@gmail.com',
    'riccardotrezzi@gmail.com',
    'riccardo.trezzi@gmail.com',
    'riccardo.trezzi00@gmail.com'
];


console.log('users', users, typeof users);
console.log('users.length', users.length, typeof users.length);
// console.log('users[0]', users[0], typeof users[0]);
// console.log('users[1]', users[1], typeof users[1]);
// console.log('users[2]', users[2], typeof users[2]);
// console.log('users[3]', users[3], typeof users[3]);

let found = false;
for (let i = 0; i < users.length ; i++) {
    console.log('users[i]', users[i], typeof users[i]);

    if (users[i] == userEmail) {
        found = true;
    }
}

console.log(found);

if (found) {
    alert ('Benvenuto!');
}
else{
    alert('Accesso negato!');
}
