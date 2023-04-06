const game = new Game()

// Load game assets
function preload() {
	game.preload()
}

// Setup game
function setup() {
	createCanvas(700,430)
}

function draw() {
	game.draw()
}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump()
	}
}
