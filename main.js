let firstPlayer = {
    name: "Федор",
    hp: 100,
    img: "//",
    weapon: [gun, bow],
    attack: function() { console.log(this.name + " fight " + "Fight..."); },
}

let secondPlayer = {
    name: "Федорка",
    hp: 100,
    img: "//",
    weapon: [gun, bow],
    attack: function() { console.log(this.name + " fight " + "Fight..."); },
}

function creatPlayer(player, name, health = 100) {
    let divPlayer = document.createElement('div');

    divPlayer.classList.add(player);



    let divProgressbar = document.createElement('div');

    divProgressbar.classList.add("progressbar");

    let divLife = document.createElement('div');

    divLife.classList.add("life");

    let divName = document.createElement('div');

    divName.classList.add("name");

    divPlaye.appendChild(divLife);
    divPlaye.appendChild(divName);




    let divCharacter = document.createElement('div');

    divCharacter.classList.add(player);
    divArena.appendChild(divPlayer);





    divArena.appendChild(divPlayer);
}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);