let firstPlayer = {
    name: "SCORPION",
    hp: 100,
    img: "//",
    weapon: [gun, bow],
    attack: function() {
        console.log(this.name + " fight " + "Fight...");
    },
};

let secondPlayer = {
    name: "SUB-ZERO",
    hp: 100,
    img: "//",
    weapon: [gun, bow],
    attack: function() {
        console.log(this.name + " fight " + "Fight...");
    },
};

let divArena = document.querySelector(".arena");

function creatPlayer(player, name, health = 100) {
    let divPlayer = document.createElement("div");

    divPlayer.classList.add(player);

    let divProgressbar = document.createElement("div");

    divProgressbar.classList.add("progressbar");

    divPlayer.appendChild(divProgressbar);

    let divLife = document.createElement("div");

    divLife.classList.add("life");
    let healthProgress = `"${health}%`;
    divLife.style.width = healthProgress;

    let divName = document.createElement("div");

    divName.classList.add("name");
    divName.innerText = name;

    divProgressbar.appendChild(divLife);
    divProgressbar.appendChild(divName);

    let divCharacter = document.createElement("div");

    let imgCharacter = document.createElement("img");
    divCharacter.appendChild(imgCharacter);

    divCharacter.classList.add(player);
    divPlayer.appendChild(divCharacter);

    divArena.appendChild(divPlayer);
}

// function creatPlayer(player, playerOb) {
//     let divPlayer = document.createElement("div");

//     divPlayer.classList.add(player);

//     let divProgressbar = document.createElement("div");

//     divProgressbar.classList.add("progressbar");

//     divPlayer.appendChild(divProgressbar);

//     let divLife = document.createElement("div");

//     divLife.classList.add("life");
//     let healthProgress = `"${playerOb.hp}%`;
//     divLife.style.width = healthProgress;

//     let divName = document.createElement("div");

//     divName.classList.add("name");
//     divName.innerText = playerOb.name;

//     divProgressbar.appendChild(divLife);
//     divProgressbar.appendChild(divName);

//     let divCharacter = document.createElement("div");

//     let imgCharacter = document.createElement("img");
//     imgCharacter.setAttribute("src", playerOb.img);
//     divCharacter.appendChild(imgCharacter);

//     divCharacter.classList.add(player);
//     divPlayer.appendChild(divCharacter);

//     divArena.appendChild(divPlayer);
// }

createPlayer("player1", "SCORPION", 50);
createPlayer("player2", "SUB-ZERO", 80);

// createPlayer("player1", firstPlayer);
// createPlayer("player2", secondPlayer);