const guestList = [ 'Odino', 'Caparezza', 'Cesare Augusto', 'Merlino', 'Biancaneve', 'Il Tutor', 'Ozzy'] 

let flag = false;

document.getElementById('check').addEventListener('click', function(){

    let nameGuest = document.getElementById('name').value;

    for (let i = 0; i < guestList.lenght; i++) {

        if (nameGuest.toLowerCase() === guestList[i].toLowerCase()) {
            flag = true;
        }
    }

    if (flag) {
        document.getElementById('message').innerHTML = 'Benvenuto'
    }
    else {
        document.getElementById('message').innerHTML = 'Non sei stato invitato. Torna a casa.'
    }

});