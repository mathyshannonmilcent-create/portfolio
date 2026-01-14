// --- GESTION DES MODALES (FENÊTRES INTERNES) ---

// Fonction pour ouvrir une modale spécifique via son ID
function ouvrirModal(idModal) {
    var modal = document.getElementById(idModal);
    if(modal){
        modal.style.display = "block";
    }
}

// Fonction pour fermer une modale spécifique
function fermerModal(idModal) {
    var modal = document.getElementById(idModal);
    if(modal){
        modal.style.display = "none";
    }
}

// Fermer la modale si on clique en dehors du contenu (sur le fond gris)
window.onclick = function(event) {
    // On vérifie si l'élément cliqué a la classe 'modal'
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// --- GESTION DU BOUTON RETOUR EN HAUT ---
let boutonHaut = document.getElementById("btn-retour-haut");

// Quand on scroll, on appelle la fonction de vérification
window.onscroll = function() {
    fonctionScroll();
};

function fonctionScroll() {
    // Si on a scrollé de plus de 20px, on affiche le bouton
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        boutonHaut.style.display = "block";
    } else {
        boutonHaut.style.display = "none";
    }
}

// Fonction appelée au clic pour remonter tout en haut
function remonterEnHaut() {
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
}