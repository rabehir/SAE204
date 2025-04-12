// ✅ ALERTES DE BASE
function basicAlert() {
    Swal.fire('Ceci est une alerte basique !');
}

function successAlert() {
    Swal.fire({
        icon: 'success',
        title: 'Succès !',
        text: 'Tout fonctionne correctement.',
        timer: 2000,
        showConfirmButton: false
    });
}

function inputAlert() {
    Swal.fire({
        title: 'Entrez votre prénom',
        input: 'text',
        inputPlaceholder: 'Prénom',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            Swal.fire(`Bonjour, ${result.value} !`);
        }
    });
}

function confirmAlert() {
    Swal.fire({
        title: 'Êtes-vous sûr ?',
        text: "Cette action est irréversible.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprime !',
        cancelButtonText: 'Annuler'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Supprimé !', 'Votre fichier a été supprimé.', 'success');
        }
    });
}

function customAlert() {
    Swal.fire({
        title: 'Alerte personnalisée',
        html: '<b style="color: #3b82f6;">Ceci est du HTML</b> dans l\'alerte !',
        imageUrl: 'https://sweetalert2.github.io/images/nyan-cat.gif',
        imageWidth: 200,
        imageAlt: 'Nyan Cat',
        background: '#f0f0f0',
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io/images/nyan-cat.gif")
            left top
            no-repeat
        `
    });
}

// ✅ BONUS

function toastAlert() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    Toast.fire({
        icon: 'info',
        title: 'Ceci est un toast'
    });
}

function stepsAlert() {
    const steps = [
        { title: 'Étape 1', text: 'Bienvenue dans la première étape.' },
        { title: 'Étape 2', text: 'Voici la deuxième étape de votre guide.' },
        { title: 'Étape 3', text: 'Vous avez terminé ! Bravo.' }
    ];

    let currentStep = 0;

    function showNextStep() {
        if (currentStep < steps.length) {
            Swal.fire({
                title: steps[currentStep].title,
                text: steps[currentStep].text,
                confirmButtonText: currentStep === steps.length - 1 ? 'Terminer' : 'Suivant',
                preConfirm: () => {
                    currentStep++;
                    if (currentStep < steps.length) {
                        showNextStep();
                    }
                }
            });
        }
    }

    showNextStep();
}

function timerAlert() {
    let timerInterval;
    Swal.fire({
        title: 'Auto fermeture',
        html: 'Fermeture dans <b></b> secondes.',
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
            const b = Swal.getHtmlContainer().querySelector('b');
            timerInterval = setInterval(() => {
                b.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    });
}

// ✅ SUPER BONUS

function formulaireAlert() {
    Swal.fire({
        title: 'Inscription',
        html:
            '<input id="swal-input-name" class="swal2-input" placeholder="Votre Nom">' +
            '<input id="swal-input-email" class="swal2-input" placeholder="Votre Email">',
        showCancelButton: true,
        confirmButtonText: 'Valider',
        preConfirm: () => {
            const name = document.getElementById('swal-input-name').value;
            const email = document.getElementById('swal-input-email').value;

            if (!name || !email) {
                Swal.showValidationMessage('Veuillez remplir tous les champs');
                return false;
            }
            return { name, email };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(`Bienvenue ${result.value.name} !`, `Votre email : ${result.value.email}`, 'success');
        }
    });
}

function customToast() {
    const icon = document.getElementById('toastIcon').value;
    const position = document.getElementById('toastPosition').value;
    const color = document.getElementById('toastColor').value;

    const Toast = Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: color,
        color: '#fff'
    });

    Toast.fire({
        icon: icon,
        title: `Toast ${icon} personnalisé !`
    });
}
