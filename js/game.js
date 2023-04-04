class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		this.backgroundImages
		this.playerImage
		this.obstacles = []
		this.coinImage
		this.badObstacles = []
		this.stoneImage
	
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage("./images/backgroundImages/pic1.png"), x: 0, speed: 0 },
			{ src: loadImage("./images/backgroundImages/pic2.png"), x: 0, speed: 1 },
			{ src: loadImage("../images/backgroundImages/pic3.png"), x: 0, speed: 2 },
			{ src: loadImage("../images/backgroundImages/pic4.png"), x: 0, speed: 3 },
			{ src: loadImage("../images/backgroundImages/pic5.png"), x: 0, speed: 4 }
		]

		this.playerImage = loadImage("../images/backgroundImages/rabbit.png")
		this.coinImage = loadImage("../images/backgroundImages/carrot.png")
		this.stoneImage = loadImage("../images/backgroundImages/stone.png")
	}

	draw() {
		clear()
		this.background.draw()
		this.player.draw()

		// Every x frames we want to push a carrot into the array 
		if (frameCount % 120 === 0) {
			this.obstacles.push(new Obstacle(this.coinImage))
		}
		
		// Every x frames we want to push a stone into the array 
		if (frameCount % 300 === 0) {
			this.badObstacles.push(new BadObstacle(this.stoneImage))
		}

    // Draw the obstacles
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})
		//Draw the badObstacles
		this.badObstacles.forEach(function (badObstacle) {
			badObstacle.draw()
		})

    // Filter the carrots which are out of the canvas or had a collision
		// We need an arrow function here, so that "this" has the right context (of the game object)
		this.obstacles = this.obstacles.filter(obstacle => {
			//console.log(this)

			if (obstacle.collision(this.player) || obstacle.x < 0 - obstacle.width) {
				
				return false
			} else {
				return true
			}
		})
	}
	
}
