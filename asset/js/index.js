const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)


// let audio=new Audio('../sound/main.mp3')
// audio.loop=true;
// audio.play()
const gravity = 0.9 //update

let playerJumped = false;
let enemyJumped = false;

const punchSound = new Audio('asset/sound/hit.wav');
const attack2Sound = new Audio('asset/sound/hit.wav');

const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: 'asset/img/background.png'
})
// animasi shop cerobong asap
const shop = new Sprite({
  position: {
    x: 600,
    y: 128
  },
  imageSrc: 'asset/img/shop.png',
  scale: 2.75,
  framesMax: 6
})

const player = new Fighter({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: 'asset/img/samuraiMack/Idle.png',
  framesMax: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 157
  },
  sprites: {
    idle: {
      imageSrc: 'asset/img/samuraiMack/Idle.png',
      framesMax: 8 //poto per frame
    },
    run: {
      imageSrc: 'asset/img/samuraiMack/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: 'asset/img/samuraiMack/Jump.png',
      framesMax: 3
    },
    fall: {
      imageSrc: 'asset/img/samuraiMack/Fall.png',
      framesMax: 3
    },
    attack1: {
      imageSrc: 'asset/img/samuraiMack/Attack1.png',
      framesMax: 6
    },
    attack2: {
      imageSrc: 'asset/img/samuraiMack/Attack2.png',
      framesMax: 6
    },
    takeHit: {
      imageSrc: 'asset/img/samuraiMack/Take hit.png',
      framesMax: 4
    },
    death: {
      imageSrc: 'asset/img/samuraiMack/Death.png',
      framesMax: 7
    }
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50
    },
    width: 160,
    height: 50
  }
})

const enemy = new Fighter({
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: 'asset/img/Players2/Idle.png',
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 215,
    y: 167
  },
  sprites: {
    idle: {
      imageSrc: 'asset/img/Players2/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: 'asset/img/Players2/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: 'asset/img/Players2/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: 'asset/img/Players2/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: 'asset/img/Players2/Attack1.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: 'asset/img/Players2/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: 'asset/img/Players2/Death.png',
      framesMax: 7
    }
  },
  attackBox: {
    offset: {
      x: -170,
      y: 50
    },
    width: 170,
    height: 50
  }
})

console.log(player)

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}

decreaseTimer()

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  shop.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  

  
  // player movement

  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5
    player.switchSprite('run')
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
    player.switchSprite('run')
  } else {
    player.switchSprite('idle')
  }

  // jumping
  if (player.velocity.y < 0) {
    player.switchSprite('jump')
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall')
  }

  // Enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5
    enemy.switchSprite('run')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5
    enemy.switchSprite('run')
  } else {
    enemy.switchSprite('idle')
  }

  // jumping
  if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump')
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall')
  }

  // detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    enemy.takeHit()
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit()
    enemy.isAttacking = false

    gsap.to('#playerHealth', {
      width: player.health + '%'
    })
  }

  // if player misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId })
  }
}

animate()

window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
      // case 'w':
      //   player.velocity.y = -20
      //   break
      case ' ':
        player.attack()
        break
      case 'q':
        player.attack2();
        break;
    }
  }

  // Event listener untuk tombol lompat pemain
window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'w':
        if (!playerJumped) {
          player.velocity.y = -20;
          playerJumped = true; // Tandai bahwa pemain sudah melompat
        }
        break;
      // ... kode lainnya ...
    }
  }
});

// Event listener untuk tombol lompat musuh
window.addEventListener('keydown', (event) => {
  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowUp':
        if (!enemyJumped) {
          enemy.velocity.y = -20;
          enemyJumped = true; // Tandai bahwa musuh sudah melompat
        }
        break;
      // ... kode lainnya ...
    }
  }
});


  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        break
      case 'ArrowDown':
        enemy.attack()

        break
    }
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})



