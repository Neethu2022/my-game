const game = new Game()

// Load game assets
function preload() {
	game.preload()
}

// Setup game
function setup() {
	createCanvas(600, 500)
}

function draw() {
	game.draw()
}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump()
	}
}
