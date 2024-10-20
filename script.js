// Récupérer le canvas et son contexte 2D
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Dimensions de la salle (en pixels)
const largeurSalle = 400;
const hauteurSalle = 300;

// Position initiale du joueur (en pixels)
let joueurX = 100;
let joueurY = 100;

// Fonction pour afficher le joueur
function afficherJoueur() {
  ctx.fillStyle = 'white';
  ctx.fillRect(joueurX, joueurY, 10, 10); // Un carré blanc de 10x10 pixels
}

// Fonction pour afficher la salle
function afficherSalle() {
  ctx.clearRect(0, 0, largeurSalle, hauteurSalle); // Effacer le canvas
  afficherJoueur();
}

// Appeler la fonction pour afficher la salle initiale
afficherSalle();