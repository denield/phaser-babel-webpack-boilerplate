import 'phaser'

const config = {
  parent: 'game',
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
  },
  scene: {
      preload: preload,
      create: create
  }
}

const game = new Phaser.Game(config)
 
function preload() {
  this.load.image('logo', 'assets/logo.png')
}

function create() {
  const logo = this.add.image(400, 150, 'logo')

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: 'Power2',
    yoyo: true,
    loop: -1
  })
}