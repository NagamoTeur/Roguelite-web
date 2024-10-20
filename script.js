const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const width = 20;
const height = 15;
const cellSize = 20;

let maze = generateMaze();
let playerX = 2;
let playerY = 2;

// ... (Le reste de votre code de génération de labyrinthe, déplacement du joueur, etc.)

// Fonction pour dessiner le jeu
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${cellSize}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      ctx.fillText(maze[y][x], x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
    }
  }
}

// Appeler draw() initialement et à intervalles réguliers
draw();
setInterval(draw, 100); // Met à jour l'affichage toutes les 100ms