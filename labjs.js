function somme(a, b) {
    return a + b;
}

function calculerSomme() {
    let x = prompt("Saisissez le premier nombre?");
    x = parseFloat(x);
    let y = prompt("Saisissez le deuxième nombre?");
    y = parseFloat(y);

    let result = somme(x, y);

    document.write("La somme de " + x + " et " + y + " est de " + result);
}

function somme() {
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var somme = Number(a) + Number(b)

    document.getElementById("result").value = somme;
}

function valider() {
    var nomInput = document.forms["cinForm"]["nom"].value;
    var cinInput = document.forms["cinForm"]["cin"].value;

    // Check vide
    if (nomInput === "" || cinInput === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }
    // Check CIN
    if (!(/^\d{8}$/.test(cinInput))) {
        alert("CIN doit être un nombre de 8 digits !");
        return;
    }
    // Valide
    alert("Valide ！");
    document.forms["cinForm"]["nom"].value = "";
    document.forms["cinForm"]["cin"].value = "";
}

function choisir() {
    var checked = [];
    var checkboxes = document.forms["checkForm"].querySelectorAll("input[type='checkbox']:checked");

    checkboxes.forEach(function(checkbox) {
        checked.push(checkbox.value);
    });

    if (checked.length === 0) {
        alert("Il faut pas ne rien maîtriser !");
    } else {
        alert("Vous avez maîtrisé : " + checked.join(", "));
    }
}

function jouer() {
    var score = 0;
    var checkedCount = 0;
    var checkboxes = document.forms["gameForm"].querySelectorAll("input[type=checkbox]");

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            score += parseInt(checkbox.value);
            checkedCount++;
        }
    });

    if (checkedCount !== 3) {
        alert("Veuillez cocher exactement trois cases.");
        return;
    }

    // document.getElementById("score").textContent = `Score du jeu: ${score}`;
    document.getElementById("score").value = score;

    if (score > 15) {
        alert("Vous êtes déjà un joueur expert.");
    } else {
        alert("Vous êtes encore un joueur débutant.");
    }
}
