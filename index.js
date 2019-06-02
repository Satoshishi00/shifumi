const buttons = document.querySelectorAll("button");

function displayImage(joueur, joueur_name) {
    let nod = document.createElement("i");
    document.body.querySelector(`.hand-${joueur_name}`).innerHTML = '';
    document.body.querySelector(`.hand-${joueur_name}`).insertAdjacentElement('beforeend', nod);
    console.log(joueur);
    switch (joueur) {
        case "Pierre":
            nod.className = '' + 'far fa-hand-rock fa-7x';
            break;
        case "Feuille":
            nod.className = '' + 'far fa-hand-paper fa-7x';
            break;
        case "Ciseaux":
            nod.className = '' + 'far fa-hand-scissors fa-7x';
            break;
        default:
            console.log("Ca fonctionne pas...")
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";
        if (joueur === robot) {
            resultat = "Égalité";
        } else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot ===
            "Pierre") || (joueur === "Ciseaux" && robot === "Feuille")) {
            resultat = "Gagné";
        } else {
            resultat = "Perdu";
        }


        document.querySelector(".resultat").innerHTML = `${resultat}`;
        //couleur en fonction du résultat
        switch (resultat) {
            case "Gagné":
                document.querySelector(".resultat").className = 'resultat green';
                break;
            case "Perdu":
                document.querySelector(".resultat").className = 'resultat red';
                break;
            default:
                document.querySelector(".resultat").className = 'resultat grey';

        }

        displayImage(joueur, 'joueur');
        displayImage(robot, 'robot');
    })
}