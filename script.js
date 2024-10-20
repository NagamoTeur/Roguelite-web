const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Taille de la salle
const largeurSalle = 20;
const hauteurSalle = 15;
const tailleCase = 20;

// Création de la salle
const salle = new Array(hauteurSalle).fill(null).map(() => new Array(largeurSalle).fill('.'));

// Position initiale du joueur
let joueurX = 2;
let joueurY = 2;

// Fonction pour afficher la salle
function afficherSalle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < hauteurSalle; y++) {
    for (let x = 0; x < largeurSalle; x++) {
      ctx.font = `${tailleCase}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(salle[y][x] === '@' ? '@' : '.', x * tailleCase + tailleCase / 2, y * tailleCase + tailleCase / 2);
    }
  }
}

// Fonction pour déplacer le joueur
function deplacerJoueur(direction) {
  switch (direction) {
    case "haut":
      if (joueurY > 0) {
        joueurY--;
      }
      break;
    case "bas":
      if (joueurY < hauteurSalle - 1) {
        joueurY++;
      }
      break;
    case "gauche":
      if (joueurX > 0) {
        joueurX--;
      }
      break;
    case "droite":
      if (joueurX < largeurSalle - 1) {
        joueurX++;
      }
      break;
  }
  salle[joueurY][joueurX] = '.';
  salle[joueurY + directionY][joueurX + directionX] = '@';
  afficherSalle();
}

// Écouteur d'événements pour les touches
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      deplacerJoueur("haut");
      break;
    case 'ArrowDown':
      deplacerJoueur("bas");
      break;
    case 'ArrowLeft':
      deplacerJoueur("gauche");
      break;
    case 'ArrowRight':
      deplacerJoueur("droite");
      break;
  }
});

// Affichage initial de la salle
afficherSalle();