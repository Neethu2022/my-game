class Obstacle {
	constructor(images) {
		this.images = images
    // p5 provides the variables width and height - they contain width and height of the canvas 
		this.x = width
		this.y = (Math.random() * height) / 2
		this.width = 200
		this.height =100
		this.velocity = 1
	}

	draw() {
		this.x -= this.velocity
		image(this.images, this.x, this.y, this.width, this.height)
	}

	collision(playerInfo) {
		// console.log("collision")

		// Get the middle of the obstacle
		let obstacleX = this.x + this.width / 2
		let obstacleY = this.y + this.height / 2

		// Get the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		
    // dist(x1, y1, x2, y2) returns the distance between the objects
		if (dist(obstacleX, obstacleY, playerX, playerY) > 50) {
			return false
		} else {
			// Increment the score
			game.eatingsound.play()
			playerInfo.score += 100
			if (playerInfo.score > 500)
			{
				console.log("Game over")
			}
			
			// Update score in dem DOM
			document.querySelector("#score span").innerText = playerInfo.score
			
			return true
		}
	}
}