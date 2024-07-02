const guestList = [ 'Odino', 'Caparezza', 'Cesare Augusto', 'Merlino', 'Biancaneve', 'Il Tutor', 'Ozzy'] 

document.getElementById('check').addEventListener('click', function(){

    let nameGuest = document.getElementById('name').value;

    let result = document.getElementById('message');

    if (guestList.includes(nameGuest.toLowerCase)) {
        result.innerHTML = 'Benvenuto'
    }
    else {
        result.innerHTML = ('Non sei stato invitato. Torna a casa.')
    }
})