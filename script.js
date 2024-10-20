const jeuElement = document.getElementById('jeu');

class Joueur {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  deplacer(direction, niveau) {
    let nouvelleX = this.x;
    let nouvelleY = this.y;

    switch (direction) {
      case 'haut':
        nouvelleY--;
        break;
      case 'bas':
        nouvelleY++;
        break;
      case 'gauche':
        nouvelleX--;
        break;
      case 'droite':
        nouvelleX++;
        break;
    }

    if (estCaseValide(nouvelleX, nouvelleY, niveau)) {
      this.x = nouvelleX;
      this.y = nouvelleY;
    }
  }
}

function estCaseValide(x, y, niveau) {
  return niveau[y][x] !== '#'; // Simplifie la vérification
}

function afficherNiveau(niveau, joueur) {
  let affichage = '';
  for (let y = 0; y < niveau.length; y++) {
    for (let x = 0; x < niveau[y].length; x++) {
      affichage += (x === joueur.x && y === joueur.y) ? '@' : niveau[y][x];
    }
    affichage += '\n';
  }
  jeuElement.textContent = affichage;
}

// Initialisation du jeu
const largeurNiveau = 10;
const hauteurNiveau = 10;
const niveau = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
];
const joueur = new Joueur(4, 2); // Position initiale du joueur

// Afficher le niveau initialement
afficherNiveau(niveau, joueur);

// Écouter les événements clavier
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      joueur.deplacer('haut', niveau);
      break;
    case 'ArrowDown':
      joueur.deplacer('bas', niveau);
      break;
    case 'ArrowLeft':
      joueur.deplacer('gauche', niveau);
      break;
    case 'ArrowRight':
      joueur.deplacer('droite', niveau);
      break;
  }
  afficherNiveau(niveau, joueur); // Met à jour l'affichage à chaque mouvement
});