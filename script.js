const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const width = 20;
const height = 15;
const cellSize = 20;

let maze = generateMaze();
let playerX = 2;
let playerY = 2;

// ... (Le reste de votre code de génération de labyrinthe, déplacement du joueur, etc.)
// Fonction pour générer un labyrinthe aléatoire (algorithme de division binaire)
function generateMaze() {
    const maze = new Array(height).fill(null).map(() => new Array(width).fill('#'));
  
    function carvePassage(x, y) {
      maze[y][x] = '.';
      const directions = [[0, -2], [0, 2], [-2, 0], [2, 0]];
      shuffle(directions);
  
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height && maze[ny][nx] === '#') {
          maze[ny + dy / 2][nx + dx / 2] = '.';
          carvePassage(nx, ny);
        }
      }
    }
  
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    carvePassage(Math.floor(Math.random() * width), Math.floor(Math.random() * height));
    return maze;
  }
  
  // Fonction pour déplacer le joueur
  function movePlayer(dx, dy) {
    const newX = playerX + dx;
    const newY = playerY + dy;
    if (newX >= 0 && newX < width && newY >= 0 && newY < height && maze[newY][newX] === '.') {
      playerX = newX;
      playerY = newY;
    }
    draw();
  }
  
  // Gestion des ennemis (exemple simple)
  const enemies = [];
  
  function addEnemy(x, y) {
    enemies.push({ x, y });
  }
  
  function moveEnemies() {
    enemies.forEach(enemy => {
      // Logique de déplacement des ennemis (par exemple, aléatoire)
      enemy.x += Math.random() * 2 - 1;
      enemy.y += Math.random() * 2 - 1;
    });
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

// Appeler draw() initialement pour afficher le jeu
draw();

// Mettre à jour l'affichage régulièrement (si nécessaire)
setInterval(draw, 100); // Met à jour l'affichage toutes les 100ms