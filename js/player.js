class Player {
	constructor() {
		this.width = 100
		this.height =100
		this.x = 0
		this.y = 440 - this.height
		this.gravity = 0.1
		this.velocity = 0
		this.score = 0
		this.lives = 3
	}

	draw() {
		this.velocity += this.gravity
		this.y += this.velocity

		// If y is lower than the top left corner of rabbit we need to set its value to the starting value
		if (this.y >= 440 - this.height) {
			this.y = 440 - this.height
		}

		image(game.playerImage, this.x, this.y, this.width, this.height)
	
	}

	jump() {
		this.velocity = -5
		game.bouncesound.play()
	}

	
}