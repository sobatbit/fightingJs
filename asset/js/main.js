kaboom({
  width: 1280,
  height: 720,
  scale: 0.7,
  debug: false,
});

const punchSound = new Audio("asset/sound/hit.wav");

loadSprite("background", "asset/background/background_layer_1.png");
loadSprite("trees", "asset/background/background_layer_2.png");
loadSpriteAtlas("asset/image/shopUpdate.png", {
  "ground-golden": {
    x: 16,
    y: 0,
    width: 16,
    height: 16,
  },
  "deep-ground": {
    x: 16,
    y: 32,
    width: 16,
    height: 16,
  },
  "ground-silver": {
    x: 150,
    y: 0,
    width: 16,
    height: 16,
  },
});

loadSprite("shop", "asset/image/shop_anim.png", {
  sliceX: 6,
  sliceY: 1,
  anims: {
    default: {
      from: 0,
      to: 5,
      speed: 12,
      loop: true,
    },
  },
});
loadSprite("fence", "asset/image/fence_1.png");
loadSprite("sign", "asset/image/sign.png");

// loadSprite("idle-player1", "asset/Player1/idle-player1.png", {
//     sliceX: 8, sliceY: 1, anims: { "idle": {from: 0, to: 7, speed: 12, loop: true}}
// })
// loadSprite("jump-player1", "asset/Player1/jump-player1.png", {
//     sliceX: 2, sliceY: 1, anims: { "jump": { from: 0, to: 1, speed: 2, loop: true}}
// })
// loadSprite("attack-player1", "asset/Player1/attack-player1.png", {
//     sliceX: 6, sliceY: 1, anims: { "attack": { from: 1, to: 5, speed: 18}}
// })
// loadSprite("run-player1", "asset/Player1/run-player1.png", {
//     sliceX: 8, sliceY: 1, anims: { "run": { from: 0, to: 7, speed: 18}}
// })
// loadSprite("death-player1", "asset/Player1/death-player1.png", {
//     sliceX: 6, sliceY: 1, anims: { "death": { from: 0, to: 5, speed: 10}}
// })

loadSprite("idle-player1", "asset/Player1a/idle.png", {
  sliceX: 8,
  sliceY: 1,
  anims: { idle: { from: 0, to: 7, speed: 12, loop: true } },
});
loadSprite("fall-player1", "asset/Player1a/fall.png", {
  sliceX: 2,
  sliceY: 1,
  anims: { fall: { from: 0, to: 2, speed: 2, loop: true } },
});
loadSprite("jump-player1", "asset/Player1a/jump.png", {
  sliceX: 2,
  sliceY: 1,
  anims: { jump: { from: 0, to: 1, speed: 2, loop: true } },
});
loadSprite("attack-player1", "asset/Player1a/attack1.png", {
  sliceX: 8,
  sliceY: 1,
  anims: { attack: { from: 0, to: 5, speed: 12 } },
});
loadSprite("take-hit-player1", "asset/Player1a/Takehit.png", {
  sliceX: 3,
  sliceY: 1,
  anims: { takehit: { from: 0, to: 1, speed: 7 } },
});
loadSprite("run-player1", "asset/Player1a/run.png", {
  sliceX: 8,
  sliceY: 1,
  anims: { run: { from: 0, to: 7, speed: 18 } },
});
loadSprite("death-player1", "asset/Player1a/death.png", {
  sliceX: 7,
  sliceY: 1,
  anims: { death: { from: 0, to: 5, speed: 10 } },
});

// loadSpSrite("idle-player2", "asset/Player2/idle-player2.png", {
//     sliceX: 4, sliceY: 1, anims: { "idle": { from: 0, to: 3, speed: 8, loop: true}}
// })
// loadSprite("jump-player2", "asset/Player2/jump-player2.png", {
//     sliceX: 2, sliceY: 1, anims: {"jump": { from: 0, to: 1, speed: 2, loop: true}}
// })
// loadSprite("attack-player2", "asset/Player2/attack-player2.png", {
//     sliceX: 4, sliceY: 1, anims: { "attack": { from: 0, to: 3, speed: 18}}
// })
// loadSprite("run-player2", "asset/Player2/run-player2.png", {
//     sliceX: 8, sliceY: 1, anims: { "run": { from: 0, to: 7, speed: 18}}
// })
// loadSprite("death-player2", "asset/Player2/death-player2.png", {
//     sliceX: 7, sliceY: 1, anims: { "death": { from: 0, to: 6, speed: 10}}
// })

loadSprite("idle-player2", "asset/Player2a/idle.png", {
  sliceX: 10,
  sliceY: 1,
  anims: { idle: { from: 0, to: 3, speed: 8, loop: true } },
});
loadSprite("fall-player2", "asset/Player2a/fall.png", {
  sliceX: 3,
  sliceY: 1,
  anims: { fall: { from: 0, to: 2, speed: 4, loop: true } },
});
loadSprite("jump-player2", "asset/Player2a/jump.png", {
  sliceX: 3,
  sliceY: 1,
  anims: { jump: { from: 0, to: 1, speed: 2, loop: true } },
});
loadSprite("attack-player2", "asset/Player2a/attack2.png", {
  sliceX: 7,
  sliceY: 1,
  anims: { attack: { from: 0, to: 3, speed: 18 } },
});
loadSprite("take-hit-player2", "asset/Player2a/Takehit.png", {
  sliceX: 3,
  sliceY: 1,
  anims: { takehit: { from: 0, to: 1, speed: 7 } },
});
loadSprite("run-player2", "asset/Player2a/run.png", {
  sliceX: 8,
  sliceY: 1,
  anims: { run: { from: 0, to: 7, speed: 18 } },
});
loadSprite("death-player2", "asset/Player2a/death.png", {
  sliceX: 7,
  sliceY: 1,
  anims: { death: { from: 0, to: 6, speed: 10 } },
});

scene("fight", () => {
  const background = add([sprite("background"), scale(4)]);

  background.add([sprite("trees")]);

  const groundTiles = addLevel(
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "------#######-----------",
      "dddddddddddddddddddddddd",
      "dddddddddddddddddddddddd",
    ],
    {
      tileWidth: 16,
      tileHeight: 16,
      tiles: {
        "#": () => [sprite("ground-golden"), area(), body({ isStatic: true })],
        "-": () => [sprite("ground-silver"), area(), body({ isStatic: true })],
        d: () => [sprite("deep-ground"), area(), body({ isStatic: true })],
      },
    }
  );

  groundTiles.use(scale(4));

  const shop = background.add([sprite("shop"), pos(170, 15)]);

  shop.play("default");

  // tembok kanan (gabisa keluar dari dunia)
  add([rect(16, 720), area(), body({ isStatic: true }), pos(-20, 0)]);

  // tembok kiri (gabisa keluar dari dunia)
  add([rect(16, 720), area(), body({ isStatic: true }), pos(1280, 0)]);

  background.add([sprite("fence"), pos(85, 125)]);

  background.add([sprite("fence"), pos(10, 125)]);

  background.add([sprite("sign"), pos(290, 115)]);

  function makePlayer(posX, posY, width, height, scaleFactor, id) {
    return add([
      pos(posX, posY),
      scale(scaleFactor),
      area({ shape: new Rect(vec2(0), width, height) }),
      anchor("center"),
      body({ stickToPlatform: true }),
      {
        isCurrentlyJumping: false,
        health: 500,
        sprites: {
          run: "run-" + id,
          idle: "idle-" + id,
          fall: "fall-" + id,
          jump: "jump-" + id,
          attack: "attack-" + id,
          takehit: "takehit-" + id,
          death: "death-" + id,
        },
      },
    ]);
  }

  setGravity(1200);

  // Player 1
  const player1 = makePlayer(200, 100, 16, 82, 4, "player1");
  player1.use(sprite(player1.sprites.idle));
  player1.play("idle");

  // Run
  function run(player, speed, flipPlayer) {
    if (player.health === 0) {
      return;
    }

    if (player.curAnim() !== "run" && !player.isCurrentlyJumping) {
      player.use(sprite(player.sprites.run));
      player.play("run");
    }
    player.move(speed, 0);
    player.flipX = flipPlayer;
  }

  function resetPlayerToIdle(player) {
    player.use(sprite(player.sprites.idle));
    player.play("idle");
  }

  onKeyDown("d", () => {
    run(player1, 500, false);
  });
  onKeyRelease("d", () => {
    if (player1.health !== 0) {
      resetPlayerToIdle(player1);
      player1.flipX = false;
    }
  });

  onKeyDown("a", () => {
    run(player1, -500, true);
  });
  onKeyRelease("a", () => {
    if (player1.health !== 0) {
      resetPlayerToIdle(player1);
      player1.flipX = true;
    }
  });

  // lompat
  function makeJump(player) {
    if (player.health === 0) {
      return;
    }

    if (player.isGrounded()) {
      const currentFlip = player.flipX;
      player.jump();
      player.use(sprite(player.sprites.jump));
      player.flipX = currentFlip;
      player.play("jump");
      player.isCurrentlyJumping = true;
    }
  }

  // fixed lompat (1x)
  function resetAfterJump(player) {
    if (player.isGrounded() && player.isCurrentlyJumping) {
      player.isCurrentlyJumping = false;
      if (player.curAnim() !== "idle") {
        resetPlayerToIdle(player);
      }
    }
    // if (player.curAnim() === "fall") {
    //   resetPlayerToIdle(player);
    // }
  }

  function makeFall(player) {
    if (player.health === 0) {
      return;
    }

    if (!player.isGrounded() && !player.isCurrentlyJumping) {
      player.use(sprite(player.sprites.fall));
      player.play("fall");
      player.isCurrentlyJumping = true;
    } else if (player.isGrounded()) {
      player.isCurrentlyJumping = false;
    }
  }

  onKeyDown("w", () => {
    makeJump(player1);
  });

  // player1.jumpForce = 800; // Menambahkan gaya lompat untuk player 1
  // player1.onUpdate(() => resetAfterJump(player1));
  // player1.onUpdate(() => {
  //   if (!player1.isGrounded() && !player1.isCurrentlyJumping) {
  //     player1.use(sprite(player1.sprites.fall));
  //     player1.play("fall");
  //   } else if (player1.curAnim() === "fall") {
  //     resetPlayerToIdle(player1);
  //   }
  //   resetAfterJump(player1);
  // });
  player1.onUpdate(() => {
    if (!player1.isGrounded() && !player1.isCurrentlyJumping) {
      player1.use(sprite(player1.sprites.fall));
      player1.play("fall");
    } else if (player1.curAnim() === "fall") {
      resetPlayerToIdle(player1);
    }
    resetAfterJump(player1);
  });

  // attack & attack box
  function attack(player, excludedKeys) {
    if (player.health === 0) {
      return;
    }

    for (const key of excludedKeys) {
      if (isKeyDown(key)) {
        return;
      }
    }

    const currentFlip = player.flipX;
    if (player.curAnim() !== "attack") {
      player.use(sprite(player.sprites.attack));
      player.flipX = currentFlip;
      const slashX = player.pos.x + 30;
      const slashXFlipped = player.pos.x - 350;
      const slashY = player.pos.y - 200;

      add([
        rect(300, 300),
        area(),
        pos(currentFlip ? slashXFlipped : slashX, slashY),
        opacity(0),
        player.id + "attackHitbox",
      ]);

      player.play("attack", {
        onEnd: () => {
          resetPlayerToIdle(player);
          player.flipX = currentFlip;
          punchSound.play();
        },
      });
    }
  }

  onKeyPress("space", () => {
    attack(player1, ["a", "d", "w"]);
  });

  onKeyRelease("space", () => {
    destroyAll(player1.id + "attackHitbox");
  });

  // player 2
  const player2 = makePlayer(1000, 200, 16, 42, 5, "player2");
  player2.use(sprite(player2.sprites.idle));
  player2.play("idle");
  player2.flipX = true;

  // run
  onKeyDown("right", () => {
    run(player2, 500, false);
  });
  onKeyRelease("right", () => {
    if (player2.health !== 0) {
      resetPlayerToIdle(player2);
      player2.flipX = false;
    }
  });

  onKeyDown("left", () => {
    run(player2, -500, true);
  });
  onKeyRelease("left", () => {
    if (player2.health !== 0) {
      resetPlayerToIdle(player2);
      player2.flipX = true;
    }
  });

  // lompat
  onKeyDown("up", () => {
    makeJump(player2);
  });

  //player2.jumpForce = 800; // Menambahkan gaya lompat untuk player 2
  //player2.onUpdate(() => resetAfterJump(player2));
  player2.onUpdate(() => {
    if (!player2.isGrounded() && !player2.isCurrentlyJumping) {
      player2.use(sprite(player2.sprites.fall));
      player2.play("fall");
    } else if (player2.curAnim() === "fall") {
      resetPlayerToIdle(player2);
    }
    // if (player2.isGrounded() && player2.isCurrentlyJumping) {
    //   player2.isCurrentlyJumping = false;
    //   resetPlayerToIdle(player2);
    // }
    resetAfterJump(player2);
  });

  // attack & attaack hit
  onKeyPress("down", () => {
    attack(player2, ["left", "right", "up"]);
  });

  onKeyRelease("down", () => {
    destroyAll(player2.id + "attackHitbox");
  });

  const counter = add([
    rect(100, 100),
    pos(center().x, center().y - 300),
    color(10, 10, 10),
    area(),
    anchor("center"),
  ]);

  // waktu permainan
  const count = counter.add([
    text("60"),
    area(),
    anchor("center"),
    {
      timeLeft: 60,
    },
  ]);

  // notifikasi atau player menang text muncul
  const winningText = add([text(""), area(), anchor("center"), pos(center())]);

  let gameOver = false;
  onKeyDown("enter", () => (gameOver ? go("fight") : null));

  function declareWinner(winningText, player1, player2) {
    if (
      (player1.health > 0 && player2.health > 0) ||
      (player1.health === 0 && player2.health === 0)
    ) {
      winningText.text = "Permainan Seri!";
    } else if (player1.health > 0 && player2.health === 0) {
      winningText.text = "Player 1 Menang!";
      player2.use(sprite(player2.sprites.death));
      player2.play("death");
    } else {
      winningText.text = "Player 2 Menang!";
      player1.use(sprite(player1.sprites.death));
      player1.play("death");
    }
  }

  const countInterval = setInterval(() => {
    if (count.timeLeft === 0) {
      clearInterval(countInterval);
      declareWinner(winningText, player1, player2);
      gameOver = true;

      return;
    }
    count.timeLeft--;
    count.text = count.timeLeft;
  }, 1000);

  // progress bar
  const player1HealthContainer = add([
    rect(500, 70),
    area(),
    outline(5),
    pos(90, 20),
    color(200, 0, 0),
  ]);

  const player1HealthBar = player1HealthContainer.add([
    rect(498, 65),
    color(0, 180, 0),
    pos(498, 70 - 2.5),
    rotate(180),
  ]);

  player1.onCollide(player2.id + "attackHitbox", () => {
    if (gameOver) {
      return;
    }

    if (player1.health !== 0) {
      player1.health -= 50;
      tween(
        player1HealthBar.width,
        player1.health,
        1,
        (val) => {
          player1HealthBar.width = val;
        },
        easings.easeOutSine
      );
    }

    if (player1.health === 0) {
      clearInterval(countInterval);
      declareWinner(winningText, player1, player2);
      gameOver = true;
      //player1.jumpForce = 0; // Mencegah player 1 melompat setelah kalah
    }

    if (player1.health !== 0 && player1.curAnim() !== "takehit") {
      player1.use(sprite("take-hit-player1"));
      player1.play("takehit", {
        onEnd: () => {
          if (player1.health > 0) {
            resetPlayerToIdle(player1);
          }
        },
      });
    }
  });

  const player2HealthContainer = add([
    rect(500, 70),
    area(),
    outline(5),
    pos(690, 20),
    color(200, 0, 0),
  ]);

  const player2HealthBar = player2HealthContainer.add([
    rect(498, 65),
    color(0, 180, 0),
    pos(2.5, 2.5),
  ]);

  player2.onCollide(player1.id + "attackHitbox", () => {
    if (gameOver) {
      return;
    }

    if (player2.health !== 0 && player2.curAnim() !== "takehit") {
      player2.use(sprite("take-hit-player2"));
      player2.play("takehit", {
        onEnd: () => {
          if (player2.health > 0) {
            resetPlayerToIdle(player2);
          }
        },
      });
    }

    if (player2.health !== 0) {
      player2.health -= 50;
      tween(
        player2HealthBar.width,
        player2.health,
        1,
        (val) => {
          player2HealthBar.width = val;
        },
        easings.easeOutSine
      );
    }

    if (player2.health === 0) {
      clearInterval(countInterval);
      declareWinner(winningText, player1, player2);
      gameOver = true;
      //player2.jumpForce = 0; // Mencegah player 2 melompat setelah kalah
    }
  });
});

go("fight");
