import { RNG, Map } from 'rot-js';

// Créer un élément HTML pour afficher le jeu
const gameContainer = document.getElementById('game');

// Créer un affichage
const display = new ROT.Display({
  width: 80,
  height: 24,
  fontSize: 16
});

// Ajouter l'affichage à l'élément HTML
gameContainer.appendChild(display.getContainer());

// Créer une carte
const map = new Map.Cellular(80, 24, { born: 4, die: 3 });
map.randomize(0.5);
map.create();

// Dessiner la carte
map.draw(display);

// Créer un personnage joueur
let player = { x: 5, y: 5 };

// Fonction pour déplacer le joueur
function movePlayer(dx, dy) {
  const newX = player.x + dx;
  const newY = player.y + dy;

  // Vérifier si la nouvelle position est valide (dans la carte)
  if (map.get(newX, newY) === 0) {
    player.x = newX;
    player.y = newY;
    display.draw(player.x, player.y, '@'); // Dessiner le joueur à la nouvelle position
  }

  // Redessiner la carte pour mettre à jour l'affichage
  map.draw(display);
}

// Écouter les événements clavier
window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      movePlayer(0, -1);
      break;
    case 'ArrowDown':
      movePlayer(0, 1);
      break;
    case 'ArrowLeft':
      movePlayer(-1, 0);
      break;
    case 'ArrowRight':
      movePlayer(1, 0);
      break;
  }
});