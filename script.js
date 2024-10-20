// script.js
import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload ()
{
    // Charger les assets ici
}

function create ()
{
// Creation de la map
const map = this.make.tilemap({ key: 'map' });
const tileset = map.addTilesetImage('tiles', 'tiles');
const layer = map.createStaticLayer(0, tileset, 0, 0);
// Ajout du playert
this.player = this.physics.add.sprite(100, 100, 'player');
}