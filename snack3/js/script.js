let number = prompt('Inserisci un numero a 4 cifre');

if (number.length !== 4) {
    alert('Il numero deve essere di 4 cifre!');
}
else {

    let somma = 0;

    for (let i = 0; i < number.length; i++) {
        
        somma += parseInt(number[i]);
        console.log(`${somma}`); 
    }
}