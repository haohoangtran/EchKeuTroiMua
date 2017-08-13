// var Nakama = {};
// Nakama.configs = {
//
// };
//
// window.onload = function () {
//     Nakama.game = new Phaser.Game(640, 960, Phaser.AUTO, '',
//         {
//             preload: preload,
//             create: create,
//             update: update,
//             render: render
//         }, false, false
//     );
// }

var playGameState = {
    // preparations before game starts
    preload: function () {
        Nakama.game.load.atlasJSONHash('planets', 'Assets/game/planets.png', 'Assets/assets_planet.json');
        Nakama.game.load.image('background', 'Assets/game/background_1.jpg')
        Nakama.game.scale.minWidth = Nakama.configs.GAME_SCREEN.width / 2;
        Nakama.game.scale.minHeight = Nakama.configs.GAME_SCREEN.height / 2;
        Nakama.game.scale.maxWidth = Nakama.configs.GAME_SCREEN.width;
        Nakama.game.scale.maxHeight = Nakama.configs.GAME_SCREEN.height;
        Nakama.game.scale.pageAlignHorizontally = true;
        Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        Nakama.game.time.advancedTiming = true;
    },

// initialize the game
    create: function () {

        Nakama.background = Nakama.game.add.sprite(0, -100, 'background');
        Nakama.groundGroup = Nakama.game.add.physicsGroup();
        Nakama.playerGroup = Nakama.game.add.physicsGroup();
        Nakama.groundBots = []
        Nakama.groundBots.push(new Ground(0, 630, 'ground.png'), {});
        Nakama.groundBots.push(new Ground(0, 230, 'ground.png'), {});
        Nakama.players = [];
        Nakama.players.push(new FrogController(1, 400, {
            type: 'bottom',
            left: Phaser.Keyboard.LEFT,
            RIGHT: Phaser.Keyboard.RIGHT,
            fire: Phaser.Keyboard.UP
        }));
        Nakama.players.push(new FrogController(1, 400, {
            type: 'top',
            left: Phaser.Keyboard.LEFT,
            RIGHT: Phaser.Keyboard.RIGHT,
            fire: Phaser.Keyboard.UP
        }));
    },

// update game state each frame
    update: function () {
        Nakama.game.physics.arcade.overlap(
            Nakama.groundGroup,
            Nakama.playerGroup,
            onBulletHitGround
        );

    },

// before camera render (mostly for debug)
    render: function () {

    }

}
var onBulletHitGround = function (groundSprite, playerSprite) {
    playerSprite.body.gravity = 0

}
