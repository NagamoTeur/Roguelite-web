const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const width = 20;
const height = 15;
const cellSize = 20; // Taille d'une cellule en pixels

// Tableau représentant le labyrinthe
let maze = generateMaze();

// Position initiale du joueur
let playerX = 2;
let playerY = 2;

// Fonction pour générer un labyrinthe aléatoire
function generateMaze() {
    // ... (Même fonction que précédemment)
}

// Fonction pour dessiner le labyrinthe et le joueur
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      ctx.fillText(maze[y][x], x * cellSize, y * cellSize);
    }
  }
}

// Fonction pour déplacer le joueur
function movePlayer(dx, dy) {
  const newX = playerX + dx;
  const newY = playerY + dy;
  if (newX >= 0 && newX < width && newY >= 0 && newY < height && maze[newY][newX] === '.') {
    playerX = newX;
    playerY = newY;
  }
  maze[playerY][playerX] = '@';
  draw();
}

// Contrôles du joueur
document.addEventListener('keydown', (event) => {
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

// Initialisation
generateMaze();
draw();