const form = document.getElementById("contactForm");

const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

const nomError = document.getElementById("nomError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function (event) {

    // Empêche l'envoi automatique du formulaire
    event.preventDefault();

    // Réinitialiser les messages d'erreur
    nomError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let formulaireValide = true;

    // Validation du nom
    if (nom.value.trim() === "") {
        nomError.textContent = "Veuillez saisir votre nom.";
        formulaireValide = false;
    }

    // Validation de l'email
    if (email.value.trim() === "") {
        emailError.textContent = "Veuillez saisir votre email.";
        formulaireValide = false;
    } else if (!email.value.includes("@")) {
        emailError.textContent = "Veuillez saisir une adresse email valide.";
        formulaireValide = false;
    }

    // Validation du message
    if (message.value.trim() === "") {
        messageError.textContent = "Veuillez saisir votre message.";
        formulaireValide = false;
    } else if (message.value.trim().length < 10) {
        messageError.textContent =
            "Le message doit contenir au moins 10 caractères.";
        formulaireValide = false;
    }

    // Si tout est valide
    if (formulaireValide) {
        alert("Votre message a été envoyé avec succès !");

        form.reset();
    }
});